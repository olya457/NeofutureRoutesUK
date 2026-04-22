import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

interface Props {
  x: number;
  y: number;
  active?: boolean;
  onPress?: () => void;
  color?: string;
}

export function MapPoint({ x, y, active, onPress, color }: Props) {
  const dotColor = color ?? Colors.accentCyan;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.wrap, { left: x - 18, top: y - 18 }]}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <View style={[styles.outer, { borderColor: dotColor, backgroundColor: `${dotColor}14` }]}>
        <View style={[styles.inner, { backgroundColor: dotColor }]} />
      </View>
      {active ? <View style={[styles.halo, { borderColor: dotColor }]} /> : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  halo: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    opacity: 0.6,
  },
});
