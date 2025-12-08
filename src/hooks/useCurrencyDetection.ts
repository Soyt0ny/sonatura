import { useState, useEffect } from 'react';

interface CurrencyInfo {
  countryCode: string;
  currencyCode: string;
  currencySymbol: string;
  exchangeRate: number;
  isLoading: boolean;
}

// Map of country codes to currency info
const countryCurrencyMap: Record<string, { code: string; symbol: string }> = {
  US: { code: 'USD', symbol: '$' },
  MX: { code: 'MXN', symbol: '$' },
  ES: { code: 'EUR', symbol: '€' },
  AR: { code: 'ARS', symbol: '$' },
  CO: { code: 'COP', symbol: '$' },
  CL: { code: 'CLP', symbol: '$' },
  PE: { code: 'PEN', symbol: 'S/' },
  BR: { code: 'BRL', symbol: 'R$' },
  GB: { code: 'GBP', symbol: '£' },
  CA: { code: 'CAD', symbol: '$' },
  DE: { code: 'EUR', symbol: '€' },
  FR: { code: 'EUR', symbol: '€' },
  IT: { code: 'EUR', symbol: '€' },
  JP: { code: 'JPY', symbol: '¥' },
  CN: { code: 'CNY', symbol: '¥' },
  IN: { code: 'INR', symbol: '₹' },
  AU: { code: 'AUD', symbol: '$' },
  // Add more as needed
};

// Cache exchange rates in localStorage for 1 hour
const CACHE_KEY = 'currency_exchange_rates';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

interface CachedRates {
  rates: Record<string, number>;
  timestamp: number;
}

const getCachedRates = (): CachedRates | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed: CachedRates = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error reading cached rates:', e);
  }
  return null;
};

const setCachedRates = (rates: Record<string, number>) => {
  try {
    const cacheData: CachedRates = {
      rates,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (e) {
    console.error('Error caching rates:', e);
  }
};

export const useCurrencyDetection = (): CurrencyInfo => {
  const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo>({
    countryCode: 'US',
    currencyCode: 'USD',
    currencySymbol: '$',
    exchangeRate: 1,
    isLoading: true,
  });

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Step 1: Detect country from IP
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();
        const countryCode = geoData.country_code || 'US';
        
        const currencyData = countryCurrencyMap[countryCode] || { code: 'USD', symbol: '$' };
        
        // If USD, no conversion needed
        if (currencyData.code === 'USD') {
          setCurrencyInfo({
            countryCode,
            currencyCode: 'USD',
            currencySymbol: '$',
            exchangeRate: 1,
            isLoading: false,
          });
          return;
        }

        // Step 2: Get exchange rate
        let exchangeRate = 1;
        
        // Check cache first
        const cached = getCachedRates();
        if (cached && cached.rates[currencyData.code]) {
          exchangeRate = cached.rates[currencyData.code];
        } else {
          // Fetch fresh rates (using free API)
          try {
            const ratesResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const ratesData = await ratesResponse.json();
            
            if (ratesData.rates) {
              setCachedRates(ratesData.rates);
              exchangeRate = ratesData.rates[currencyData.code] || 1;
            }
          } catch (rateError) {
            console.error('Error fetching exchange rates:', rateError);
            // Fallback to approximate rates if API fails
            const fallbackRates: Record<string, number> = {
              MXN: 17.5,
              EUR: 0.92,
              GBP: 0.79,
              CAD: 1.36,
              ARS: 875,
              COP: 4000,
              CLP: 900,
              PEN: 3.7,
              BRL: 5.0,
              JPY: 150,
              CNY: 7.2,
              INR: 83,
              AUD: 1.53,
            };
            exchangeRate = fallbackRates[currencyData.code] || 1;
          }
        }

        setCurrencyInfo({
          countryCode,
          currencyCode: currencyData.code,
          currencySymbol: currencyData.symbol,
          exchangeRate,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error detecting currency:', error);
        // Default to USD on error
        setCurrencyInfo({
          countryCode: 'US',
          currencyCode: 'USD',
          currencySymbol: '$',
          exchangeRate: 1,
          isLoading: false,
        });
      }
    };

    detectCurrency();
  }, []);

  return currencyInfo;
};

// Utility function to format price with currency
export const formatPrice = (
  priceUSD: number,
  currencyInfo: CurrencyInfo,
  showOriginal: boolean = false
): string => {
  const convertedPrice = priceUSD * currencyInfo.exchangeRate;
  
  // Format based on currency
  const formatted = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currencyInfo.currencyCode,
    minimumFractionDigits: currencyInfo.currencyCode === 'JPY' || currencyInfo.currencyCode === 'CLP' ? 0 : 2,
    maximumFractionDigits: currencyInfo.currencyCode === 'JPY' || currencyInfo.currencyCode === 'CLP' ? 0 : 2,
  }).format(convertedPrice);

  if (showOriginal && currencyInfo.currencyCode !== 'USD') {
    return `${formatted} (~$${priceUSD} USD)`;
  }

  return formatted;
};
