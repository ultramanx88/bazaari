import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import '../global.css';

// Import fonts for web
if (Platform.OS === 'web') {
  // Add any web-specific imports here
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF8E7', // --background
        },
        headerTintColor: '#F28C28', // --primary
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: Platform.OS === 'web' ? 'Noto Sans Devanagari' : 'System',
        },
        headerShadowVisible: true,
      }}
    >
      {/* Hide header for main tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Hide header for web routes */}
      <Stack.Screen name="(web)" options={{ headerShown: false }} />
      
      {/* Auth screens with custom styling */}
      <Stack.Screen 
        name="auth" 
        options={{ 
          headerShown: false,
          presentation: 'modal' 
        }} 
      />
      
      {/* Services screens */}
      <Stack.Screen 
        name="services" 
        options={{ 
          headerShown: true,
          title: 'Our Services',
          headerStyle: {
            backgroundColor: '#0A4D3C', // --secondary
          },
          headerTintColor: '#FFF8E7', // --background
        }} 
      />
    </Stack>
  );
}