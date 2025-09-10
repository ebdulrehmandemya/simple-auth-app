import { ValidationError } from "@/types";

/**
 * Validates Iranian mobile number format
 * Valid formats:
 * - 09xxxxxxxxx
 * - +989xxxxxxxxx
 * - 00989xxxxxxxxx
 */
export const validateIranianMobile = (mobile: string): ValidationError => {
  // Remove all spaces
  const cleanedMobile = mobile.replace(/\s/g, '');
  
  // Define regex patterns for valid Iranian mobile formats
  const patterns = [
    /^09\d{9}$/,           // 09xxxxxxxxx
    /^\+989\d{9}$/,        // +989xxxxxxxxx
    /^00989\d{9}$/         // 00989xxxxxxxxx
  ];
  
  // Check if any pattern matches
  const isValid = patterns.some(pattern => pattern.test(cleanedMobile));
  
  if (!isValid) {
    return {
      isValid: false,
      message: 'Please enter a valid Iranian mobile number (09xxxxxxxxx, +989xxxxxxxxx, or 00989xxxxxxxxx)'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};

/**
 * Normalizes mobile number to standard format (09xxxxxxxxx)
 */
export const normalizeMobileNumber = (mobile: string): string => {
  let normalized = mobile.replace(/\s/g, '');
  
  if (normalized.startsWith('+989')) {
    normalized = '0' + normalized.substring(3);
  } else if (normalized.startsWith('00989')) {
    normalized = '0' + normalized.substring(4);
  }
  
  return normalized;
};
