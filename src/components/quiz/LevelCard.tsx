import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';
import { QuizLevel } from '../../types/quiz';

interface Props {
  level: QuizLevel;
  onPress: () => void;
  bestScore?: number | null;
}

export function LevelCard({ level, onPress, bestScore }: Props) {
  const total = level.questions.length;
  const percent =
    bestScore !== null && bestScore !== undefined ? Math.round((bestScore / total) * 100) : null;

  return (
    <TouchableOpacity activeOpacity={0.88} onPress={onPress} style={styles.card}>
      <View style={styles.emojiWrap}>
        <Text style={styles.emoji}>{level.emoji}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          Level {level.id} · {level.title}
        </Text>
        <Text style={styles.sub} numberOfLines={1}>
          {level.subtitle} · {total} questions
        </Text>
      </View>
      <View style={styles.right}>
        {percent !== null ? (
          <Text style={[styles.percent, { color: percent >= 66 ? Colors.accentGreen : Colors.accentCyan }]}>
            {percent}%
          </Text>
        ) : (
          <Text style={styles.arrow}>›</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    padding: ms(14),
    gap: 12,
  },
  emojiWrap: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    backgroundColor: Colors.cardActive,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  emoji: {
    fontSize: 22,
  },
  body: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: Colors.white,
    fontSize: fs(14),
    fontWeight: FontWeight.bold as any,
  },
  sub: {
    color: Colors.textSecondary,
    fontSize: fs(12),
  },
  right: {
    alignItems: 'flex-end',
    gap: 4,
    minWidth: 46,
  },
  percent: {
    fontSize: fs(14),
    fontWeight: FontWeight.extrabold as any,
  },
  arrow: {
    color: Colors.textSecondary,
    fontSize: 22,
    fontWeight: FontWeight.bold as any,
  },
});
