import  screensPath from '@/app/screensPath';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={screensPath.login}>
        <Stack.Screen name={screensPath.login} options={{ title: 'LoginScreen', headerShown:false }} />
        <Stack.Screen name={screensPath.tabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name={screensPath.settings} options={{ title: 'Settings', headerShown:false }} /> */}
        <Stack.Screen name={screensPath.settings2} options={{ title: 'Settings2', headerShown:false }} />
        <Stack.Screen name={screensPath.settings3} options={{ title: 'Settings3', headerShown:false }} />
        <Stack.Screen name={screensPath.settings4} options={{ title: 'Settings4', headerShown:false }} />
        <Stack.Screen name={screensPath.notFound} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
