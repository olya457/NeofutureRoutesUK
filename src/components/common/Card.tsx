import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius } from '../../theme/spacing';
import { ms } from '../../utils/responsive';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  padded?: boolean;
  bordered?: boolean;
}

export function Card({ children, style, onPress, padded = true, bordered = true }: Props) {
  const base = [
    styles.card,
    {
      padding: padded ? ms(14) : 0,
      borderWidth: bordered ? 1 : 0,
    },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={base}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={base}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderColor: Colors.cardBorder,
  },
});
