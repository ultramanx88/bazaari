import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { nativeTheme } from '../../theme/native-theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof nativeTheme.spacing;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  style,
}) => {
  const cardStyle = [
    styles.base,
    styles[variant],
    { padding: nativeTheme.spacing[padding] },
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: nativeTheme.colors.background,
    borderRadius: nativeTheme.borderRadius.lg,
  },
  
  default: {
    backgroundColor: nativeTheme.colors.background,
  },
  
  elevated: {
    backgroundColor: nativeTheme.colors.background,
    ...nativeTheme.shadows.lg,
  },
  
  outlined: {
    backgroundColor: nativeTheme.colors.background,
    borderWidth: 1,
    borderColor: nativeTheme.colors.borderLight,
  },
});