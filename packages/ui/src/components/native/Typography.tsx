import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { nativeTheme } from '../../theme/native-theme';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: keyof typeof nativeTheme.colors;
  align?: 'left' | 'center' | 'right';
  weight?: keyof typeof nativeTheme.typography.fontWeight;
  style?: TextStyle;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  color = 'textPrimary',
  align = 'left',
  weight,
  style,
}) => {
  const textStyle = [
    styles.base,
    styles[variant],
    { color: nativeTheme.colors[color] },
    { textAlign: align },
    weight && { fontWeight: nativeTheme.typography.fontWeight[weight] },
    style,
  ];

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  base: {
    color: nativeTheme.colors.textPrimary,
  },
  
  h1: {
    fontSize: nativeTheme.typography.fontSize['7xl'],
    fontWeight: nativeTheme.typography.fontWeight.bold,
    lineHeight: nativeTheme.typography.fontSize['7xl'] * nativeTheme.typography.lineHeight.tight,
  },
  
  h2: {
    fontSize: nativeTheme.typography.fontSize['4xl'],
    fontWeight: nativeTheme.typography.fontWeight.bold,
    lineHeight: nativeTheme.typography.fontSize['4xl'] * nativeTheme.typography.lineHeight.tight,
  },
  
  h3: {
    fontSize: nativeTheme.typography.fontSize['3xl'],
    fontWeight: nativeTheme.typography.fontWeight.semibold,
    lineHeight: nativeTheme.typography.fontSize['3xl'] * nativeTheme.typography.lineHeight.snug,
  },
  
  h4: {
    fontSize: nativeTheme.typography.fontSize['2xl'],
    fontWeight: nativeTheme.typography.fontWeight.semibold,
    lineHeight: nativeTheme.typography.fontSize['2xl'] * nativeTheme.typography.lineHeight.snug,
  },
  
  h5: {
    fontSize: nativeTheme.typography.fontSize.lg,
    fontWeight: nativeTheme.typography.fontWeight.medium,
    lineHeight: nativeTheme.typography.fontSize.lg * nativeTheme.typography.lineHeight.normal,
  },
  
  h6: {
    fontSize: nativeTheme.typography.fontSize.base,
    fontWeight: nativeTheme.typography.fontWeight.medium,
    lineHeight: nativeTheme.typography.fontSize.base * nativeTheme.typography.lineHeight.normal,
  },
  
  body1: {
    fontSize: nativeTheme.typography.fontSize.base,
    fontWeight: nativeTheme.typography.fontWeight.normal,
    lineHeight: nativeTheme.typography.fontSize.base * nativeTheme.typography.lineHeight.relaxed,
  },
  
  body2: {
    fontSize: nativeTheme.typography.fontSize.sm,
    fontWeight: nativeTheme.typography.fontWeight.normal,
    lineHeight: nativeTheme.typography.fontSize.sm * nativeTheme.typography.lineHeight.normal,
  },
  
  caption: {
    fontSize: nativeTheme.typography.fontSize.xs,
    fontWeight: nativeTheme.typography.fontWeight.normal,
    lineHeight: nativeTheme.typography.fontSize.xs * nativeTheme.typography.lineHeight.normal,
    color: nativeTheme.colors.textSecondary,
  },
  
  overline: {
    fontSize: nativeTheme.typography.fontSize.xs,
    fontWeight: nativeTheme.typography.fontWeight.semibold,
    lineHeight: nativeTheme.typography.fontSize.xs * nativeTheme.typography.lineHeight.normal,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});