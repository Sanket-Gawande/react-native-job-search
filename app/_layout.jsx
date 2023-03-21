import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useCallback } from "react";
import { View } from "react-native";
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('../fonts/Inter-Regular.ttf'),
    InterMedium: require('../fonts/Inter-Medium.ttf'),
    InterSemi: require('../fonts/Inter-SemiBold.ttf'),
    InterBold: require('../fonts/Inter-Bold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <View

    style={{
      flex: 1,
      backgroundColor: '#131929',
    }}
  >
    <Stack
      screenOptions={
        {
          statusBarTranslucent: true,
        }
      }
      onLayout={onLayoutRootView}
    />
  </View>
}