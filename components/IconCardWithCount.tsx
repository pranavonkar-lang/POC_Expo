import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

type IconCardWithCountProps = {
  icon: React.ReactNode;
  storageKey: string;         // <-- key to fetch from AsyncStorage
  containerStyle?: ViewStyle;
  badgeColor?: string;
  defaultCount?: number;
};

export default function IconCardWithCount({
  icon,
  storageKey,
  containerStyle,
  badgeColor = '#FF3B30',
  defaultCount = 0,
}: IconCardWithCountProps) {
  const [count, setCount] = useState<number>(defaultCount);

  useEffect(() => {
    const fetchCount = async () => {
      const stored = await AsyncStorage.getItem(storageKey);
      console.log(stored);
      const parsed = stored ? parseInt(stored, 10) : defaultCount;
      setCount(parsed);
    };
    fetchCount();

    const interval = setInterval(fetchCount, 1000);
    return () => clearInterval(interval);
  }, [storageKey]);

  return (
    <ThemedView style={[styles.card, containerStyle]}>
      {icon}
      {count > 0 && (
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <ThemedText type="default" style={styles.badgeText}>
            {count > 99 ? '99+' : count}
          </ThemedText>
        </View>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    elevation: 2,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
