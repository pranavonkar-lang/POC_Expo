import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react'
import NavigationStack from './NavigationStack';
import NotificationManager from "@/app/services/notificationServices/NotificationManager"; 

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NotificationManager />
          <NavigationStack />
        </PersistGate>
      </Provider>
  );
}
