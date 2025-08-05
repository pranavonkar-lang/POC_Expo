import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { useDrawerStatus } from '@react-navigation/drawer';

export function useTabBarVisibility(shouldShowTab: boolean) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';

  useFocusEffect(
    useCallback(() => {
      const parentNav = navigation.getParent();

      const shouldHideTab = isDrawerOpen || !shouldShowTab;

      parentNav?.setOptions({
        tabBarStyle: shouldHideTab ? { display: 'none' } : undefined,
      });

      return () => {
        parentNav?.setOptions({ tabBarStyle: { display: 'none' } });
      };
    }, [isDrawerOpen, shouldShowTab])
  );
}
