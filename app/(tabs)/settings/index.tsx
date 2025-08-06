import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';

import SettingsScreen from '@/screens/SettingsScreen';
import { useHideTabBarOnDrawerOpen } from '@/hooks/useHideTabBarOnDrawerOpen';

export default function index() {

  const isDrawerOpen = useDrawerStatus() === 'open';
  useHideTabBarOnDrawerOpen();

  return (
    <View style={{ flex: 1 }}>
        <SettingsScreen />
    </View>
  );
}
