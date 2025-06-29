import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F28C28', // --primary
        tabBarInactiveTintColor: '#2E2E2E', // --text
        tabBarStyle: {
          backgroundColor: '#FFF8E7', // --background
          borderTopColor: '#F28C28', // --primary
          borderTopWidth: 2,
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          fontFamily: Platform.OS === 'web' ? 'Noto Sans Devanagari' : 'System',
        },
        headerStyle: {
          backgroundColor: '#FFF8E7', // --background
          shadowColor: '#F28C28', // --primary
        },
        headerTintColor: '#F28C28', // --primary
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: Platform.OS === 'web' ? 'Noto Sans Devanagari' : 'System',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" size={size} color={color} />
          ),
          tabBarBadge: 2, // Example badge
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}