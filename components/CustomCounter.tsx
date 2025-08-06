import React, { useEffect, useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomButton from "./CustomButton";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

type CustomCounterProps = {
  initialCount?: number;
  min?: number;
  max?: number;
  onChange?: (count: number) => void;
  containerStyle?: ViewStyle;
  defaultCount?: number;
};

const STORAGE_KEY = "counter_value";

export default function CustomCounter({
  initialCount = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  containerStyle,
  defaultCount = 0,
}: CustomCounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    const loadCount = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        setCount(parsed);
        onChange?.(parsed);
      } else {
        await AsyncStorage.setItem(STORAGE_KEY, String(initialCount));
      }
    };
    loadCount();
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed = stored ? parseInt(stored, 10) : defaultCount;
      if (count != parsed) {
        setCount(parsed);
      }
    };
    fetchCount();
    const interval = setInterval(fetchCount, 1000);
    return () => clearInterval(interval);
  }, [STORAGE_KEY]);

  const updateCount = async (newCount: number) => {
    setCount(newCount);
    await AsyncStorage.setItem(STORAGE_KEY, String(newCount));
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  count: {
    minWidth: 40,
    textAlign: "center",
  },
  button: {
    minWidth: 48,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
