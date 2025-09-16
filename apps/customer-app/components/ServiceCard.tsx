import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { customerTheme } from '../theme';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  serviceType: keyof typeof customerTheme.colors;
  onPress: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  serviceType,
  onPress,
}) => {
  const serviceColor = customerTheme.colors[serviceType] || customerTheme.colors.primary;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.iconContainer, { backgroundColor: serviceColor }]}>
        <Image source={icon} style={styles.icon} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      
      <View style={[styles.accent, { backgroundColor: serviceColor }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: customerTheme.colors.background,
    borderRadius: customerTheme.borderRadius.lg,
    padding: customerTheme.spacing.md,
    marginBottom: customerTheme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    ...customerTheme.shadows.md,
    position: 'relative',
    overflow: 'hidden',
  },
  
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: customerTheme.borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: customerTheme.spacing.md,
  },
  
  icon: {
    width: 32,
    height: 32,
    tintColor: customerTheme.colors.white,
  },
  
  content: {
    flex: 1,
  },
  
  title: {
    fontSize: customerTheme.typography.fontSize.lg,
    fontWeight: customerTheme.typography.fontWeight.semibold,
    color: customerTheme.colors.textPrimary,
    marginBottom: 4,
  },
  
  description: {
    fontSize: customerTheme.typography.fontSize.sm,
    color: customerTheme.colors.textSecondary,
    lineHeight: customerTheme.typography.fontSize.sm * customerTheme.typography.lineHeight.relaxed,
  },
  
  accent: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
});