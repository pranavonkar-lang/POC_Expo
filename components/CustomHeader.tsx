import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

type CustomHeaderProps = {
  title: string;
  showBack?: boolean;
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
  rightIcon?: React.ReactNode;
  onRightPress?: () => void;
};

export default function CustomHeader({
  title,
  showBack = false,
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
}: CustomHeaderProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const renderLeft = () => {
    if (showBack) {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconTouch}>
          <Ionicons name="chevron-back" size={24} color="#007AFF" />
        </TouchableOpacity>
      );
    }

    if (leftIcon) {
      return (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconTouch}>
          {leftIcon}
        </TouchableOpacity>
      );
    }

    return <View style={styles.iconTouch} />;
  };

  const renderRight = () => {
    if (rightIcon) {
      return (
        <TouchableOpacity onPress={onRightPress} style={styles.iconTouch}>
          {rightIcon}
        </TouchableOpacity>
      );
    }

    return <View style={styles.iconTouch} />;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10}]}>
      <View style={styles.headerContent}>
        {renderLeft()}
        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>
        {renderRight()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    borderColor: '#e0e0e0',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize:20,
  },
  iconTouch: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
