import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Settings',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="notification"
          options={{
            drawerLabel: 'Notification',
            title: 'overview',
          }}
        />
      </Drawer>
    // </GestureHandlerRootView>
  );
}
