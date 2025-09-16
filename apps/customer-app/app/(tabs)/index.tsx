import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const services = [
  { id: 'food', title: 'Food Delivery', icon: 'restaurant', color: '#ffb703', route: '/food' },
  { id: 'hotel', title: 'Hotels', icon: 'bed', color: '#219ebc', route: '/hotel' },
  { id: 'spa', title: 'Spa & Massage', icon: 'flower', color: '#8ecae6', route: '/spa' },
  { id: 'visa', title: 'Visa Services', icon: 'airplane', color: '#023047', route: '/visa' },
  { id: 'restaurant', title: 'Restaurants', icon: 'wine', color: '#fb8500', route: '/restaurant' },
  { id: 'healthcare', title: 'Healthcare', icon: 'medical', color: '#22c55e', route: '/healthcare' },
  { id: 'realestate', title: 'Real Estate', icon: 'home', color: '#219ebc', route: '/realestate' },
  { id: 'marketplace', title: 'Marketplace', icon: 'storefront', color: '#8ecae6', route: '/marketplace' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Bazaari</Text>
        <Text style={styles.subtitle}>Your all-in-one service platform</Text>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={[styles.serviceCard, { backgroundColor: service.color }]}
            onPress={() => router.push(service.route)}
          >
            <Ionicons name={service.icon as any} size={32} color="white" />
            <Text style={styles.serviceTitle}>{service.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Orders</Text>
        <Text style={styles.emptyText}>No recent orders</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 24,
    background: 'linear-gradient(135deg, #8ecae6 0%, #219ebc 100%)',
    backgroundColor: '#219ebc',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Cairo',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 8,
    opacity: 0.9,
    fontFamily: 'Cairo',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Cairo',
  },
  section: {
    padding: 24,
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1c1c1c',
    fontFamily: 'Cairo',
  },
  emptyText: {
    color: '#6f6f6f',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
    fontFamily: 'Cairo',
  },
});