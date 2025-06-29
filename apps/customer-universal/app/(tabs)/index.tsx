import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MobileHome() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8E7' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Hero Section for Mobile */}
        <View style={{
          backgroundColor: '#F28C28', // --primary
          minHeight: 300,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <Text style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: '#FFF8E7', // --background
            textAlign: 'center',
            marginBottom: 12,
          }}>
            🇮🇳 Welcome to Bazzaaari
          </Text>
          
          <Text style={{
            fontSize: 16,
            color: '#FFF8E7', // --background
            textAlign: 'center',
            marginBottom: 20,
            opacity: 0.9,
          }}>
            Your one-stop platform for all services
          </Text>
        </View>

        {/* Services Preview */}
        <View style={{
          padding: 20,
          backgroundColor: '#FFF8E7', // --background
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#0A4D3C', // --secondary
            marginBottom: 16,
            textAlign: 'center',
          }}>
            Our Services
          </Text>

          {/* Service Cards Preview */}
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
            {[
              { name: 'Food Delivery', icon: '🍽️' },
              { name: 'Hotels', icon: '🏨' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Shopping', icon: '🛒' },
            ].map((service, index) => (
              <View
                key={index}
                style={{
                  width: '48%',
                  backgroundColor: '#FFFFFF',
                  padding: 16,
                  borderRadius: 12,
                  marginBottom: 12,
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'rgba(242, 140, 40, 0.2)',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                <Text style={{ fontSize: 32, marginBottom: 8 }}>
                  {service.icon}
                </Text>
                <Text style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#0A4D3C', // --secondary
                  textAlign: 'center',
                }}>
                  {service.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}