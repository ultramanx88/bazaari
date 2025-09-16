import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { nativeTheme } from '../../theme/native-theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyleCombined = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={textStyleCombined}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: nativeTheme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Variants
  primary: {
    backgroundColor: nativeTheme.colors.primary,
    ...nativeTheme.shadows.md,
  },
  secondary: {
    backgroundColor: nativeTheme.colors.primaryLight,
    ...nativeTheme.shadows.sm,
  },
  accent: {
    backgroundColor: nativeTheme.colors.accent,
    ...nativeTheme.shadows.md,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: nativeTheme.colors.primary,
  },
  
  // Sizes
  sm: {
    paddingHorizontal: nativeTheme.spacing.md,
    paddingVertical: nativeTheme.spacing.sm,
    minHeight: 36,
  },
  md: {
    paddingHorizontal: nativeTheme.spacing.lg,
    paddingVertical: nativeTheme.spacing.md,
    minHeight: 48,
  },
  lg: {
    paddingHorizontal: nativeTheme.spacing.xl,
    paddingVertical: nativeTheme.spacing.lg,
    minHeight: 56,
  },
  
  // Disabled state
  disabled: {
    opacity: 0.5,
  },
  
  // Text styles
  text: {
    fontWeight: nativeTheme.typography.fontWeight.semibold,
    textAlign: 'center',
  },
  
  primaryText: {
    color: nativeTheme.colors.white,
  },
  secondaryText: {
    color: nativeTheme.colors.primaryDark,
  },
  accentText: {
    color: nativeTheme.colors.white,
  },
  outlineText: {
    color: nativeTheme.colors.primary,
  },
  
  smText: {
    fontSize: nativeTheme.typography.fontSize.sm,
  },
  mdText: {
    fontSize: nativeTheme.typography.fontSize.base,
  },
  lgText: {
    fontSize: nativeTheme.typography.fontSize.lg,
  },
  
  disabledText: {
    opacity: 0.7,
  },
});