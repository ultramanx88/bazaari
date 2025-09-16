import { nativeTheme } from '@bazaari/ui/src/theme/native-theme';

// Customer App specific theme extensions
export const customerTheme = {
  ...nativeTheme,
  
  // Customer app specific colors
  colors: {
    ...nativeTheme.colors,
    
    // Service category colors
    food: '#ffb703',
    hotel: '#219ebc',
    spa: '#8ecae6',
    visa: '#023047',
    healthcare: '#22c55e',
    realestate: '#fb8500',
    marketplace: '#6366f1',
    
    // Status colors
    orderPending: '#f59e0b',
    orderConfirmed: '#22c55e',
    orderDelivered: '#10b981',
    orderCancelled: '#ef4444',
  },
  
  // Customer app specific spacing
  layout: {
    headerHeight: 60,
    tabBarHeight: 80,
    cardSpacing: 16,
    sectionSpacing: 24,
  },
} as const;

export type CustomerTheme = typeof customerTheme;