import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

type ButtonType = 'primary' | 'secondary' | 'outline';

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function CustomButton({
  title,
  onPress,
  type = 'primary',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  fullWidth = false,
  backgroundColor,
  textColor,
}: CustomButtonProps) {
  const getButtonStyle = (): ViewStyle[] => {
    let baseStyle = [styles.button, fullWidth && styles.fullWidth, style];
    if (type === 'primary') baseStyle.push(styles.primary);
    if (type === 'secondary') baseStyle.push(styles.secondary);
    if (type === 'outline') baseStyle.push(styles.outline);
    if (backgroundColor) baseStyle.push({ backgroundColor });
    if (disabled) baseStyle.push(styles.disabled);
    return baseStyle.filter(Boolean) as ViewStyle[];
  };

  const getTextStyle = (): TextStyle[] => {
    let baseStyle = [styles.text, textStyle];
    if (type === 'primary') baseStyle.push(styles.textPrimary);
    if (type === 'secondary') baseStyle.push(styles.textSecondary);
    if (type === 'outline') baseStyle.push(styles.textOutline);
    if (textColor) baseStyle.push({ color: textColor });
    if (disabled) baseStyle.push(styles.textDisabled);
    return baseStyle.filter(Boolean) as TextStyle[];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor || (type === 'outline' ? '#007AFF' : '#fff')} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text style={getTextStyle()}>{title}</Text>
          {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 6,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#f0f0f0',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#007AFF',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#fff',
  },
  textSecondary: {
    color: '#333',
  },
  textOutline: {
    color: '#007AFF',
  },
  textDisabled: {
    color: '#aaa',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
});