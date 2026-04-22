import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';

interface Props {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  emoji?: string;
  style?: ViewStyle;
  accentColor?: string;
  compact?: boolean;
}

export function Chip({ label, selected, onPress, emoji, style, accentColor, compact }: Props) {
  const activeColor = accentColor ?? Colors.accentCyan;

  const bg = selected ? activeColor : Colors.card;
  const borderColor = selected ? activeColor : Colors.cardBorder;
  const textColor = selected ? Colors.black : Colors.textPrimary;

  const base = [
    styles.chip,
    {
      backgroundColor: bg,
      borderColor,
      borderRadius: Radius.pill,
      paddingHorizontal: compact ? ms(12) : ms(16),
      paddingVertical: compact ? ms(6) : ms(9),
      minHeight: compact ? ms(30) : ms(38),
    },
    style,
  ];

  const inner = (
    <>
      {emoji ? (
        <Text
          style={{
            fontSize: fs(compact ? 12 : 14),
            lineHeight: fs(compact ? 16 : 18),
            marginRight: 6,
          }}
        >
          {emoji}
        </Text>
      ) : null}
      <Text
        style={[
          styles.label,
          {
            color: textColor,
            fontSize: fs(compact ? 12 : 13),
            lineHeight: fs(compact ? 16 : 18),
          },
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={base}>
        {inner}
      </TouchableOpacity>
    );
  }
  return <View style={base}>{inner}</View>;
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: FontWeight.semibold as any,
  },
});
