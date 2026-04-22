import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms, getScreenSize } from '../../utils/responsive';

interface Props {
  emoji: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function EmptyState({ emoji, title, description, children }: Props) {
  const { isVerySmall } = getScreenSize();

  return (
    <View style={styles.wrap}>
      <View style={styles.iconCircle}>
        <Text style={[styles.emoji, { fontSize: fs(isVerySmall ? 36 : 44) }]}>{emoji}</Text>
      </View>

      <Text style={[styles.title, { fontSize: fs(isVerySmall ? 18 : 22) }]} numberOfLines={2}>
        {title}
      </Text>

      {description ? (
        <Text style={[styles.description, { fontSize: fs(isVerySmall ? 12 : 14) }]}>{description}</Text>
      ) : null}

      {children ? <View style={styles.actions}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(24),
    gap: 10,
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: Radius.pill,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  emoji: {},
  title: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
    textAlign: 'center',
  },
  description: {
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 8,
  },
  actions: {
    marginTop: 16,
    width: '100%',
    gap: 10,
  },
});
