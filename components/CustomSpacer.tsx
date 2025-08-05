// components/CustomSpacer.tsx
import React from 'react';
import { View, ViewStyle } from 'react-native';

type SpacerProps = {
  height?: number;
  width?: number;
  style?: ViewStyle;
};

export const CustomSpacer: React.FC<SpacerProps> = ({
  height = 8,
  width = 0,
  style,
}) => {
  return <View style={[{ height, width }, style]} />;
};
