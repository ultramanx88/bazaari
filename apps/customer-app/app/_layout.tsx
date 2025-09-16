import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="food" options={{ title: 'Food Delivery' }} />
        <Stack.Screen name="hotel" options={{ title: 'Hotels & Accommodation' }} />
        <Stack.Screen name="spa" options={{ title: 'Spa & Massage' }} />
        <Stack.Screen name="visa" options={{ title: 'Visa Services' }} />
        <Stack.Screen name="restaurant" options={{ title: 'Restaurant Booking' }} />
        <Stack.Screen name="healthcare" options={{ title: 'Healthcare' }} />
        <Stack.Screen name="realestate" options={{ title: 'Real Estate' }} />
        <Stack.Screen name="marketplace" options={{ title: 'Marketplace' }} />
      </Stack>
    </QueryClientProvider>
  );
}