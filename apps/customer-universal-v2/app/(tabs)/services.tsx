 import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Services() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8E7' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: '#F28C28', fontWeight: 'bold' }}>
          🛍️ Services
        </Text>
        <Text style={{ fontSize: 16, color: '#0A4D3C', marginTop: 8 }}>
          Coming Soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
