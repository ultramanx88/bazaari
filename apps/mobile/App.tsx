import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Tajawal_400Regular, Tajawal_700Bold } from '@expo-google-fonts/tajawal';

// 👉 ป้องกันการปิด Splash screen อัตโนมัติ
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Tajawal_400Regular,
    Tajawal_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  // 👉 โหลด resources อื่นๆ เพิ่มถ้าต้องการใน useEffect นี้
  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  // 👉 ซ่อน Splash เมื่อแอพโหลดเสร็จ
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Tajawal_700Bold', fontSize: 24 }}>
        Welcome to Bazaaari!
      </Text>
    </View>
  );
}
