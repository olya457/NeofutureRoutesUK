import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';

interface Props {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightIcon?: string;
  onRightPress?: () => void;
  rightActive?: boolean;
  large?: boolean;
}

export function ScreenHeader({
  title,
  subtitle,
  onBack,
  rightIcon,
  onRightPress,
  rightActive,
  large,
}: Props) {
  return (
    <View style={[styles.wrap, { paddingHorizontal: ms(20), paddingTop: ms(8) }]}>
      <View style={styles.row}>
        {onBack ? (
          <TouchableOpacity
            onPress={onBack}
            activeOpacity={0.7}
            style={styles.circleBtn}
          >
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>
        ) : null}

        <View style={[styles.texts, onBack ? styles.textsWithBack : null]}>
          <Text
            style={[
              styles.title,
              { fontSize: fs(large ? 28 : 22), textAlign: onBack ? 'center' : 'left' },
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={[styles.subtitle, { textAlign: onBack ? 'center' : 'left' }]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>

        {rightIcon && onRightPress ? (
          <TouchableOpacity
            onPress={onRightPress}
            activeOpacity={0.75}
            style={[
              styles.circleBtn,
              rightActive && { backgroundColor: Colors.accentCyan, borderColor: Colors.accentCyan },
            ]}
          >
            <Text style={{ fontSize: fs(16), color: rightActive ? Colors.black : Colors.white }}>
              {rightIcon}
            </Text>
          </TouchableOpacity>
        ) : onBack ? (
          <View style={{ width: ms(36) }} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  texts: {
    flex: 1,
  },
  textsWithBack: {
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  back: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: FontWeight.semibold as any,
    marginTop: -2,
  },
  circleBtn: {
    width: ms(36),
    height: ms(36),
    borderRadius: Radius.pill,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
