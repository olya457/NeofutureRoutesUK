import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';

interface Props {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function SecondaryButton({ label, onPress, style }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ms(12),
    paddingHorizontal: ms(18),
    borderRadius: Radius.pill,
    width: '100%',
  },
  label: {
    color: Colors.textSecondary,
    fontSize: fs(14),
    fontWeight: FontWeight.semibold as any,
  },
});
