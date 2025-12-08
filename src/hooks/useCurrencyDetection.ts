import { useState, useEffect } from 'react';

export interface CurrencyInfo {
  countryCode: string;
  currencyCode: string;
  currencySymbol: string;
  exchangeRate: number;
  countryFlag: string;
  isLoading: boolean;
}

// Complete map of all countries to currency info and flag emoji
const countryCurrencyMap: Record<string, { code: string; symbol: string; flag: string }> = {
  // Americas
  US: { code: 'USD', symbol: '$', flag: '🇺🇸' },
  CA: { code: 'CAD', symbol: '$', flag: '🇨🇦' },
  MX: { code: 'MXN', symbol: '$', flag: '🇲🇽' },
  GT: { code: 'GTQ', symbol: 'Q', flag: '🇬🇹' },
  BZ: { code: 'BZD', symbol: '$', flag: '🇧🇿' },
  SV: { code: 'USD', symbol: '$', flag: '🇸🇻' },
  HN: { code: 'HNL', symbol: 'L', flag: '🇭🇳' },
  NI: { code: 'NIO', symbol: 'C$', flag: '🇳🇮' },
  CR: { code: 'CRC', symbol: '₡', flag: '🇨🇷' },
  PA: { code: 'USD', symbol: '$', flag: '🇵🇦' },
  CU: { code: 'CUP', symbol: '$', flag: '🇨🇺' },
  DO: { code: 'DOP', symbol: 'RD$', flag: '🇩🇴' },
  HT: { code: 'HTG', symbol: 'G', flag: '🇭🇹' },
  JM: { code: 'JMD', symbol: '$', flag: '🇯🇲' },
  PR: { code: 'USD', symbol: '$', flag: '🇵🇷' },
  TT: { code: 'TTD', symbol: '$', flag: '🇹🇹' },
  BB: { code: 'BBD', symbol: '$', flag: '🇧🇧' },
  BS: { code: 'BSD', symbol: '$', flag: '🇧🇸' },
  LC: { code: 'XCD', symbol: '$', flag: '🇱🇨' },
  GD: { code: 'XCD', symbol: '$', flag: '🇬🇩' },
  VC: { code: 'XCD', symbol: '$', flag: '🇻🇨' },
  AG: { code: 'XCD', symbol: '$', flag: '🇦🇬' },
  DM: { code: 'XCD', symbol: '$', flag: '🇩🇲' },
  KN: { code: 'XCD', symbol: '$', flag: '🇰🇳' },
  AW: { code: 'AWG', symbol: 'ƒ', flag: '🇦🇼' },
  CW: { code: 'ANG', symbol: 'ƒ', flag: '🇨🇼' },
  KY: { code: 'KYD', symbol: '$', flag: '🇰🇾' },
  BM: { code: 'BMD', symbol: '$', flag: '🇧🇲' },
  VI: { code: 'USD', symbol: '$', flag: '🇻🇮' },
  VG: { code: 'USD', symbol: '$', flag: '🇻🇬' },
  TC: { code: 'USD', symbol: '$', flag: '🇹🇨' },
  // South America
  CO: { code: 'COP', symbol: '$', flag: '🇨🇴' },
  VE: { code: 'VES', symbol: 'Bs', flag: '🇻🇪' },
  EC: { code: 'USD', symbol: '$', flag: '🇪🇨' },
  PE: { code: 'PEN', symbol: 'S/', flag: '🇵🇪' },
  BR: { code: 'BRL', symbol: 'R$', flag: '🇧🇷' },
  BO: { code: 'BOB', symbol: 'Bs', flag: '🇧🇴' },
  PY: { code: 'PYG', symbol: '₲', flag: '🇵🇾' },
  UY: { code: 'UYU', symbol: '$', flag: '🇺🇾' },
  AR: { code: 'ARS', symbol: '$', flag: '🇦🇷' },
  CL: { code: 'CLP', symbol: '$', flag: '🇨🇱' },
  GY: { code: 'GYD', symbol: '$', flag: '🇬🇾' },
  SR: { code: 'SRD', symbol: '$', flag: '🇸🇷' },
  GF: { code: 'EUR', symbol: '€', flag: '🇬🇫' },
  FK: { code: 'FKP', symbol: '£', flag: '🇫🇰' },
  // Europe
  GB: { code: 'GBP', symbol: '£', flag: '🇬🇧' },
  IE: { code: 'EUR', symbol: '€', flag: '🇮🇪' },
  FR: { code: 'EUR', symbol: '€', flag: '🇫🇷' },
  DE: { code: 'EUR', symbol: '€', flag: '🇩🇪' },
  ES: { code: 'EUR', symbol: '€', flag: '🇪🇸' },
  PT: { code: 'EUR', symbol: '€', flag: '🇵🇹' },
  IT: { code: 'EUR', symbol: '€', flag: '🇮🇹' },
  NL: { code: 'EUR', symbol: '€', flag: '🇳🇱' },
  BE: { code: 'EUR', symbol: '€', flag: '🇧🇪' },
  LU: { code: 'EUR', symbol: '€', flag: '🇱🇺' },
  AT: { code: 'EUR', symbol: '€', flag: '🇦🇹' },
  CH: { code: 'CHF', symbol: 'Fr', flag: '🇨🇭' },
  LI: { code: 'CHF', symbol: 'Fr', flag: '🇱🇮' },
  MC: { code: 'EUR', symbol: '€', flag: '🇲🇨' },
  AD: { code: 'EUR', symbol: '€', flag: '🇦🇩' },
  SM: { code: 'EUR', symbol: '€', flag: '🇸🇲' },
  VA: { code: 'EUR', symbol: '€', flag: '🇻🇦' },
  MT: { code: 'EUR', symbol: '€', flag: '🇲🇹' },
  GR: { code: 'EUR', symbol: '€', flag: '🇬🇷' },
  CY: { code: 'EUR', symbol: '€', flag: '🇨🇾' },
  SI: { code: 'EUR', symbol: '€', flag: '🇸🇮' },
  HR: { code: 'EUR', symbol: '€', flag: '🇭🇷' },
  SK: { code: 'EUR', symbol: '€', flag: '🇸🇰' },
  EE: { code: 'EUR', symbol: '€', flag: '🇪🇪' },
  LV: { code: 'EUR', symbol: '€', flag: '🇱🇻' },
  LT: { code: 'EUR', symbol: '€', flag: '🇱🇹' },
  FI: { code: 'EUR', symbol: '€', flag: '🇫🇮' },
  SE: { code: 'SEK', symbol: 'kr', flag: '🇸🇪' },
  NO: { code: 'NOK', symbol: 'kr', flag: '🇳🇴' },
  DK: { code: 'DKK', symbol: 'kr', flag: '🇩🇰' },
  IS: { code: 'ISK', symbol: 'kr', flag: '🇮🇸' },
  PL: { code: 'PLN', symbol: 'zł', flag: '🇵🇱' },
  CZ: { code: 'CZK', symbol: 'Kč', flag: '🇨🇿' },
  HU: { code: 'HUF', symbol: 'Ft', flag: '🇭🇺' },
  RO: { code: 'RON', symbol: 'lei', flag: '🇷🇴' },
  BG: { code: 'BGN', symbol: 'лв', flag: '🇧🇬' },
  RS: { code: 'RSD', symbol: 'дин', flag: '🇷🇸' },
  BA: { code: 'BAM', symbol: 'KM', flag: '🇧🇦' },
  ME: { code: 'EUR', symbol: '€', flag: '🇲🇪' },
  MK: { code: 'MKD', symbol: 'ден', flag: '🇲🇰' },
  AL: { code: 'ALL', symbol: 'L', flag: '🇦🇱' },
  XK: { code: 'EUR', symbol: '€', flag: '🇽🇰' },
  UA: { code: 'UAH', symbol: '₴', flag: '🇺🇦' },
  MD: { code: 'MDL', symbol: 'L', flag: '🇲🇩' },
  BY: { code: 'BYN', symbol: 'Br', flag: '🇧🇾' },
  RU: { code: 'RUB', symbol: '₽', flag: '🇷🇺' },
  GE: { code: 'GEL', symbol: '₾', flag: '🇬🇪' },
  AM: { code: 'AMD', symbol: '֏', flag: '🇦🇲' },
  AZ: { code: 'AZN', symbol: '₼', flag: '🇦🇿' },
  TR: { code: 'TRY', symbol: '₺', flag: '🇹🇷' },
  // Asia
  JP: { code: 'JPY', symbol: '¥', flag: '🇯🇵' },
  CN: { code: 'CNY', symbol: '¥', flag: '🇨🇳' },
  HK: { code: 'HKD', symbol: '$', flag: '🇭🇰' },
  MO: { code: 'MOP', symbol: 'P', flag: '🇲🇴' },
  TW: { code: 'TWD', symbol: '$', flag: '🇹🇼' },
  KR: { code: 'KRW', symbol: '₩', flag: '🇰🇷' },
  KP: { code: 'KPW', symbol: '₩', flag: '🇰🇵' },
  MN: { code: 'MNT', symbol: '₮', flag: '🇲🇳' },
  IN: { code: 'INR', symbol: '₹', flag: '🇮🇳' },
  PK: { code: 'PKR', symbol: '₨', flag: '🇵🇰' },
  BD: { code: 'BDT', symbol: '৳', flag: '🇧🇩' },
  LK: { code: 'LKR', symbol: 'Rs', flag: '🇱🇰' },
  NP: { code: 'NPR', symbol: '₨', flag: '🇳🇵' },
  BT: { code: 'BTN', symbol: 'Nu', flag: '🇧🇹' },
  MV: { code: 'MVR', symbol: 'Rf', flag: '🇲🇻' },
  TH: { code: 'THB', symbol: '฿', flag: '🇹🇭' },
  VN: { code: 'VND', symbol: '₫', flag: '🇻🇳' },
  LA: { code: 'LAK', symbol: '₭', flag: '🇱🇦' },
  KH: { code: 'KHR', symbol: '៛', flag: '🇰🇭' },
  MM: { code: 'MMK', symbol: 'K', flag: '🇲🇲' },
  MY: { code: 'MYR', symbol: 'RM', flag: '🇲🇾' },
  SG: { code: 'SGD', symbol: '$', flag: '🇸🇬' },
  BN: { code: 'BND', symbol: '$', flag: '🇧🇳' },
  ID: { code: 'IDR', symbol: 'Rp', flag: '🇮🇩' },
  TL: { code: 'USD', symbol: '$', flag: '🇹🇱' },
  PH: { code: 'PHP', symbol: '₱', flag: '🇵🇭' },
  // Middle East
  IL: { code: 'ILS', symbol: '₪', flag: '🇮🇱' },
  PS: { code: 'ILS', symbol: '₪', flag: '🇵🇸' },
  JO: { code: 'JOD', symbol: 'د.ا', flag: '🇯🇴' },
  LB: { code: 'LBP', symbol: 'ل.ل', flag: '🇱🇧' },
  SY: { code: 'SYP', symbol: '£', flag: '🇸🇾' },
  IQ: { code: 'IQD', symbol: 'ع.د', flag: '🇮🇶' },
  IR: { code: 'IRR', symbol: '﷼', flag: '🇮🇷' },
  KW: { code: 'KWD', symbol: 'د.ك', flag: '🇰🇼' },
  SA: { code: 'SAR', symbol: '﷼', flag: '🇸🇦' },
  AE: { code: 'AED', symbol: 'د.إ', flag: '🇦🇪' },
  QA: { code: 'QAR', symbol: 'ر.ق', flag: '🇶🇦' },
  BH: { code: 'BHD', symbol: 'ب.د', flag: '🇧🇭' },
  OM: { code: 'OMR', symbol: 'ر.ع', flag: '🇴🇲' },
  YE: { code: 'YER', symbol: '﷼', flag: '🇾🇪' },
  AF: { code: 'AFN', symbol: '؋', flag: '🇦🇫' },
  // Central Asia
  KZ: { code: 'KZT', symbol: '₸', flag: '🇰🇿' },
  UZ: { code: 'UZS', symbol: 'so\'m', flag: '🇺🇿' },
  TM: { code: 'TMT', symbol: 'm', flag: '🇹🇲' },
  TJ: { code: 'TJS', symbol: 'ЅМ', flag: '🇹🇯' },
  KG: { code: 'KGS', symbol: 'с', flag: '🇰🇬' },
  // Oceania
  AU: { code: 'AUD', symbol: '$', flag: '🇦🇺' },
  NZ: { code: 'NZD', symbol: '$', flag: '🇳🇿' },
  FJ: { code: 'FJD', symbol: '$', flag: '🇫🇯' },
  PG: { code: 'PGK', symbol: 'K', flag: '🇵🇬' },
  SB: { code: 'SBD', symbol: '$', flag: '🇸🇧' },
  VU: { code: 'VUV', symbol: 'Vt', flag: '🇻🇺' },
  NC: { code: 'XPF', symbol: '₣', flag: '🇳🇨' },
  PF: { code: 'XPF', symbol: '₣', flag: '🇵🇫' },
  WS: { code: 'WST', symbol: 'T', flag: '🇼🇸' },
  TO: { code: 'TOP', symbol: 'T$', flag: '🇹🇴' },
  TV: { code: 'AUD', symbol: '$', flag: '🇹🇻' },
  KI: { code: 'AUD', symbol: '$', flag: '🇰🇮' },
  NR: { code: 'AUD', symbol: '$', flag: '🇳🇷' },
  MH: { code: 'USD', symbol: '$', flag: '🇲🇭' },
  FM: { code: 'USD', symbol: '$', flag: '🇫🇲' },
  PW: { code: 'USD', symbol: '$', flag: '🇵🇼' },
  GU: { code: 'USD', symbol: '$', flag: '🇬🇺' },
  AS: { code: 'USD', symbol: '$', flag: '🇦🇸' },
  CK: { code: 'NZD', symbol: '$', flag: '🇨🇰' },
  NU: { code: 'NZD', symbol: '$', flag: '🇳🇺' },
  TK: { code: 'NZD', symbol: '$', flag: '🇹🇰' },
  // Africa
  EG: { code: 'EGP', symbol: 'E£', flag: '🇪🇬' },
  LY: { code: 'LYD', symbol: 'ل.د', flag: '🇱🇾' },
  TN: { code: 'TND', symbol: 'د.ت', flag: '🇹🇳' },
  DZ: { code: 'DZD', symbol: 'د.ج', flag: '🇩🇿' },
  MA: { code: 'MAD', symbol: 'د.م', flag: '🇲🇦' },
  MR: { code: 'MRU', symbol: 'UM', flag: '🇲🇷' },
  ML: { code: 'XOF', symbol: 'CFA', flag: '🇲🇱' },
  SN: { code: 'XOF', symbol: 'CFA', flag: '🇸🇳' },
  GM: { code: 'GMD', symbol: 'D', flag: '🇬🇲' },
  GW: { code: 'XOF', symbol: 'CFA', flag: '🇬🇼' },
  GN: { code: 'GNF', symbol: 'FG', flag: '🇬🇳' },
  SL: { code: 'SLE', symbol: 'Le', flag: '🇸🇱' },
  LR: { code: 'LRD', symbol: '$', flag: '🇱🇷' },
  CI: { code: 'XOF', symbol: 'CFA', flag: '🇨🇮' },
  BF: { code: 'XOF', symbol: 'CFA', flag: '🇧🇫' },
  NE: { code: 'XOF', symbol: 'CFA', flag: '🇳🇪' },
  TG: { code: 'XOF', symbol: 'CFA', flag: '🇹🇬' },
  BJ: { code: 'XOF', symbol: 'CFA', flag: '🇧🇯' },
  NG: { code: 'NGN', symbol: '₦', flag: '🇳🇬' },
  GH: { code: 'GHS', symbol: '₵', flag: '🇬🇭' },
  CM: { code: 'XAF', symbol: 'CFA', flag: '🇨🇲' },
  CF: { code: 'XAF', symbol: 'CFA', flag: '🇨🇫' },
  TD: { code: 'XAF', symbol: 'CFA', flag: '🇹🇩' },
  GA: { code: 'XAF', symbol: 'CFA', flag: '🇬🇦' },
  CG: { code: 'XAF', symbol: 'CFA', flag: '🇨🇬' },
  CD: { code: 'CDF', symbol: 'FC', flag: '🇨🇩' },
  GQ: { code: 'XAF', symbol: 'CFA', flag: '🇬🇶' },
  ST: { code: 'STN', symbol: 'Db', flag: '🇸🇹' },
  AO: { code: 'AOA', symbol: 'Kz', flag: '🇦🇴' },
  ZM: { code: 'ZMW', symbol: 'ZK', flag: '🇿🇲' },
  ZW: { code: 'ZWL', symbol: '$', flag: '🇿🇼' },
  MW: { code: 'MWK', symbol: 'MK', flag: '🇲🇼' },
  MZ: { code: 'MZN', symbol: 'MT', flag: '🇲🇿' },
  NA: { code: 'NAD', symbol: '$', flag: '🇳🇦' },
  BW: { code: 'BWP', symbol: 'P', flag: '🇧🇼' },
  ZA: { code: 'ZAR', symbol: 'R', flag: '🇿🇦' },
  SZ: { code: 'SZL', symbol: 'L', flag: '🇸🇿' },
  LS: { code: 'LSL', symbol: 'L', flag: '🇱🇸' },
  MG: { code: 'MGA', symbol: 'Ar', flag: '🇲🇬' },
  MU: { code: 'MUR', symbol: '₨', flag: '🇲🇺' },
  SC: { code: 'SCR', symbol: '₨', flag: '🇸🇨' },
  KM: { code: 'KMF', symbol: 'CF', flag: '🇰🇲' },
  RE: { code: 'EUR', symbol: '€', flag: '🇷🇪' },
  YT: { code: 'EUR', symbol: '€', flag: '🇾🇹' },
  KE: { code: 'KES', symbol: 'KSh', flag: '🇰🇪' },
  UG: { code: 'UGX', symbol: 'USh', flag: '🇺🇬' },
  TZ: { code: 'TZS', symbol: 'TSh', flag: '🇹🇿' },
  RW: { code: 'RWF', symbol: 'FRw', flag: '🇷🇼' },
  BI: { code: 'BIF', symbol: 'FBu', flag: '🇧🇮' },
  ET: { code: 'ETB', symbol: 'Br', flag: '🇪🇹' },
  ER: { code: 'ERN', symbol: 'Nfk', flag: '🇪🇷' },
  DJ: { code: 'DJF', symbol: 'Fdj', flag: '🇩🇯' },
  SO: { code: 'SOS', symbol: 'S', flag: '🇸🇴' },
  SS: { code: 'SSP', symbol: '£', flag: '🇸🇸' },
  SD: { code: 'SDG', symbol: 'ج.س', flag: '🇸🇩' },
  CV: { code: 'CVE', symbol: '$', flag: '🇨🇻' },
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

// Function to get flag emoji from country code
const getFlagEmoji = (countryCode: string): string => {
  const country = countryCurrencyMap[countryCode];
  if (country) return country.flag;
  
  // Generate flag emoji from country code (works for most countries)
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const useCurrencyDetection = (): CurrencyInfo => {
  const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo>({
    countryCode: 'US',
    currencyCode: 'USD',
    currencySymbol: '$',
    exchangeRate: 1,
    countryFlag: '🇺🇸',
    isLoading: true,
  });

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Step 1: Detect country from IP
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geoData = await geoResponse.json();
        const countryCode = geoData.country_code || 'US';
        
        const currencyData = countryCurrencyMap[countryCode] || { code: 'USD', symbol: '$', flag: getFlagEmoji(countryCode) };
        const flag = currencyData.flag || getFlagEmoji(countryCode);
        
        // If USD, no conversion needed
        if (currencyData.code === 'USD') {
          setCurrencyInfo({
            countryCode,
            currencyCode: 'USD',
            currencySymbol: '$',
            exchangeRate: 1,
            countryFlag: flag,
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
          countryFlag: flag,
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
          countryFlag: '🇺🇸',
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
