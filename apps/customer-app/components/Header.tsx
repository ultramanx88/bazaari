import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { customerTheme } from '../theme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBackPress,
  rightAction,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          {showBack && (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color={customerTheme.colors.textPrimary} 
              />
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.centerSection}>
          <Text style={styles.title}>{title}</Text>
        </View>
        
        <View style={styles.rightSection}>
          {rightAction && (
            <TouchableOpacity onPress={rightAction.onPress} style={styles.actionButton}>
              <Ionicons 
                name={rightAction.icon} 
                size={24} 
                color={customerTheme.colors.textPrimary} 
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: customerTheme.colors.background,
  },
  
  container: {
    height: customerTheme.layout.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: customerTheme.spacing.md,
    backgroundColor: customerTheme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: customerTheme.colors.borderLight,
  },
  
  leftSection: {
    width: 40,
    alignItems: 'flex-start',
  },
  
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  
  rightSection: {
    width: 40,
    alignItems: 'flex-end',
  },
  
  title: {
    fontSize: customerTheme.typography.fontSize.lg,
    fontWeight: customerTheme.typography.fontWeight.semibold,
    color: customerTheme.colors.textPrimary,
  },
  
  backButton: {
    padding: 8,
  },
  
  actionButton: {
    padding: 8,
  },
});