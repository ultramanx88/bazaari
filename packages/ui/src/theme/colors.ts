// Bazaari Platform Color Theme
export const colors = {
  // Primary theme colors based on your specification
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Main green
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Your specified theme colors
  theme: {
    mint: '#8ecae6',
    blue: '#219ebc',
    darkBlue: '#023047',
    orange: '#ffb703',
    yellow: '#fb8500',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Semantic colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Background colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
  },
  
  // Text colors
  text: {
    primary: '#1c1c1c',
    secondary: '#6f6f6f',
    tertiary: '#a3a3a3',
    inverse: '#ffffff',
  },
  
  // Border colors
  border: {
    light: '#ebebeb',
    medium: '#d1d5db',
    dark: '#9ca3af',
  },
} as const;

export type Colors = typeof colors;