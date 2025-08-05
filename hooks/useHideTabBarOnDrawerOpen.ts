import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { useDrawerStatus } from '@react-navigation/drawer';

export function useHideTabBarOnDrawerOpen() {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';

  useFocusEffect(
    useCallback(() => {
      const parentNav = navigation.getParent();

      if (isDrawerOpen) {
        parentNav?.setOptions({ tabBarStyle: { display: 'none' } });
      } else {
        parentNav?.setOptions({ tabBarStyle: undefined });
      }

      return () => {
        parentNav?.setOptions({ tabBarStyle: undefined });
      };
    }, [isDrawerOpen])
  );
}
