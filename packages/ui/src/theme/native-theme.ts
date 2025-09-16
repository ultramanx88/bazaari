// React Native Theme Configuration for Expo Apps
export const nativeTheme = {
  colors: {
    // Primary theme colors
    mint: '#8ecae6',
    blue: '#219ebc',
    darkBlue: '#023047',
    orange: '#ffb703',
    yellow: '#fb8500',
    
    // Primary palette
    primary: '#219ebc',
    primaryLight: '#8ecae6',
    primaryDark: '#023047',
    
    // Accent palette
    accent: '#ffb703',
    accentDark: '#fb8500',
    
    // Neutral colors
    white: '#ffffff',
    black: '#000000',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#ebebeb',
    gray300: '#d4d4d4',
    gray400: '#a3a3a3',
    gray500: '#6f6f6f',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#1c1c1c',
    
    // Semantic colors
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f8fafc',
    backgroundTertiary: '#f1f5f9',
    
    // Text colors
    textPrimary: '#1c1c1c',
    textSecondary: '#6f6f6f',
    textTertiary: '#a3a3a3',
    textInverse: '#ffffff',
    
    // Border colors
    borderLight: '#ebebeb',
    borderMedium: '#d1d5db',
    borderDark: '#9ca3af',
  },
  
  typography: {
    fontFamily: {
      regular: 'Cairo_400Regular',
      medium: 'Cairo_500Medium',
      semiBold: 'Cairo_600SemiBold',
      bold: 'Cairo_700Bold',
    },
    
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 70,
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
} as const;

export type NativeTheme = typeof nativeTheme;