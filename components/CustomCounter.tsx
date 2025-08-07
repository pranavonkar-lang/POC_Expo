import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store/common/hooks';
import { setBadgeCount } from '@/store/features/badgeSlice';

import CustomButton from './CustomButton';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

type CustomCounterProps = {
  storageKey: string; // key used in Redux store
  min?: number;
  max?: number;
  onChange?: (count: number) => void;
  containerStyle?: ViewStyle;
  defaultCount?: number;
};

export default function CustomCounter({
  storageKey,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  containerStyle,
  defaultCount = 0,
}: CustomCounterProps) {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state:any) => state.badge[storageKey] ?? defaultCount);

  const updateCount = (newCount: number) => {
    dispatch(setBadgeCount({ key: storageKey, count: newCount }));
    onChange?.(newCount);
  };

  const handleIncrement = () => {
    if (count < max) {
      updateCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      updateCount(count - 1);
    }
  };

  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <CustomButton
        title="−"
        onPress={handleDecrement}
        type="outline"
        style={styles.button}
      />
      <ThemedText type="title" style={styles.count}>
        {count}
      </ThemedText>
      <CustomButton
        title="+"
        onPress={handleIncrement}
        type="outline"
        style={styles.button}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  count: {
    minWidth: 40,
    textAlign: 'center',
  },
  button: {
    minWidth: 48,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

