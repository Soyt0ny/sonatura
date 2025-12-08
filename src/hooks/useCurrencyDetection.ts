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

// Round to psychological pricing (ending in 7 or 9)
const roundToPsychologicalPrice = (value: number): number => {
  // For very small values, don't apply this logic
  if (value < 5) {
    return Math.round(value * 100) / 100;
  }
  
  // For values under 20, round to nearest .97 or .99
  if (value < 20) {
    const base = Math.floor(value);
    const options = [base - 0.03, base + 0.97, base + 0.99, base + 1.97];
    return options.reduce((closest, opt) => 
      Math.abs(opt - value) < Math.abs(closest - value) ? opt : closest
    );
  }
  
  // For larger values, round to end in 7 or 9
  const rounded = Math.round(value);
  const base = Math.floor(rounded / 10) * 10;
  
  const candidates = [
    base - 3,  // ends in 7 (previous ten)
    base - 1,  // ends in 9 (previous ten)
    base + 7,  // ends in 7
    base + 9,  // ends in 9
  ].filter(c => c > 0);
  
  // Find closest, prefer 7 on ties (like $37, $67, $97)
  let closest = candidates[0];
  let minDist = Math.abs(rounded - closest);
  
  for (const c of candidates) {
    const dist = Math.abs(rounded - c);
    if (dist < minDist || (dist === minDist && c % 10 === 7)) {
      minDist = dist;
      closest = c;
    }
  }
  
  return closest;
};

// Utility function to format price with currency
export const formatPrice = (
  priceUSD: number,
  currencyInfo: CurrencyInfo,
  showOriginal: boolean = false
): string => {
  // If USD, return without conversion
  if (currencyInfo.currencyCode === 'USD') {
    return `$${priceUSD}`;
  }
  
  const convertedPrice = priceUSD * currencyInfo.exchangeRate;
  const psychologicalPrice = roundToPsychologicalPrice(convertedPrice);
  
  // Currencies that don't use decimals
  const noDecimalCurrencies = ['JPY', 'CLP', 'KRW', 'VND', 'IDR'];
  const useDecimals = !noDecimalCurrencies.includes(currencyInfo.currencyCode) && psychologicalPrice < 100;
  
  // Format based on currency
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyInfo.currencyCode,
    minimumFractionDigits: useDecimals ? 2 : 0,
    maximumFractionDigits: useDecimals ? 2 : 0,
  }).format(psychologicalPrice);

  if (showOriginal && currencyInfo.currencyCode !== 'USD') {
    return `${formatted} (~$${priceUSD} USD)`;
  }

  return formatted;
};
