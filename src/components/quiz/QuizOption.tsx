import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';

interface Props {
  label: string;
  selected?: boolean;
  onPress: () => void;
  disabled?: boolean;
  correct?: boolean;
  wrong?: boolean;
}

export function QuizOption({ label, selected, onPress, disabled, correct, wrong }: Props) {
  const showFeedback = correct || wrong;
  const isGradient = selected && !showFeedback;

  const bg = correct
    ? `${Colors.success}22`
    : wrong
    ? `${Colors.danger}22`
    : Colors.card;

  const borderColor = correct
    ? Colors.success
    : wrong
    ? Colors.danger
    : isGradient
    ? Colors.accentCyan
    : Colors.cardBorder;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
      style={styles.wrap}
    >
      <View
        style={[
          styles.option,
          {
            backgroundColor: isGradient ? Colors.transparent : bg,
            borderColor,
            padding: ms(16),
            minHeight: ms(56),
          },
        ]}
      >
        {isGradient ? (
          <LinearGradient
            colors={[Colors.buttonGradientStart, Colors.buttonGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[StyleSheet.absoluteFillObject, { borderRadius: Radius.md }]}
          />
        ) : null}

        <View
          style={[
            styles.radio,
            {
              borderColor: isGradient ? Colors.white : Colors.textTertiary,
            },
          ]}
        >
          {isGradient ? <View style={styles.radioDot} /> : null}
        </View>

        <Text
          style={[
            styles.label,
            {
              color: Colors.white,
              fontSize: fs(14),
              lineHeight: fs(20),
            },
          ]}
          numberOfLines={3}
          allowFontScaling={false}
        >
          {label}
        </Text>

        {correct ? (
          <Text style={[styles.mark, { color: Colors.success }]}>✓</Text>
        ) : null}
        {wrong ? (
          <Text style={[styles.mark, { color: Colors.danger }]}>✕</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  option: {
    borderRadius: Radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    width: '100%',
    overflow: 'hidden',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  label: {
    flex: 1,
    fontWeight: FontWeight.semibold as any,
    includeFontPadding: false,
  },
  mark: {
    fontSize: 18,
    fontWeight: FontWeight.bold as any,
  },
});
