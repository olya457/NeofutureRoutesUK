import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { LevelCard } from '../components/quiz/LevelCard';
import { GradientButton } from '../components/common/GradientButton';
import { Card } from '../components/common/Card';
import { QUIZ_LEVELS } from '../data/quizData';
import { QuizResult } from '../types/quiz';
import { getQuizResults } from '../store/quizStore';
import { Colors } from '../theme/colors';
import { FontWeight } from '../theme/spacing';
import { fs, ms, getScreenSize } from '../utils/responsive';
import { RootNavProp } from '../types/navigation';

export function SignalCheckScreen() {
  const navigation = useNavigation<RootNavProp>();
  const { isVerySmall } = getScreenSize();
  const [results, setResults] = useState<QuizResult[]>([]);

  useFocusEffect(
    useCallback(() => {
      getQuizResults().then(setResults);
    }, [])
  );

  const completedCount = results.length;
  const totalLevels = QUIZ_LEVELS.length;

  const nextLevelId = useMemo(() => {
    for (const l of QUIZ_LEVELS) {
      if (!results.find(r => r.levelId === l.id)) return l.id;
    }
    return QUIZ_LEVELS[0].id;
  }, [results]);

  const bestFor = (levelId: number) => results.find(r => r.levelId === levelId)?.score ?? null;

  return (
    <ScreenContainer>
      <ScreenHeader title="Signal Check" subtitle="Test your tech knowledge" large />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: ms(20),
          paddingTop: 6,
          paddingBottom: 160,
          gap: 14,
        }}
      >
        <Card>
          <View style={styles.heroRow}>
            <View style={styles.heroIcon}>
              <Text style={styles.heroEmoji}>🧠</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.heroTitle, { fontSize: fs(isVerySmall ? 15 : 17) }]}
                numberOfLines={1}
              >
                Ready to test your knowledge?
              </Text>
              <Text style={styles.heroSub}>
                {completedCount}/{totalLevels} levels completed
              </Text>
            </View>
          </View>
          <GradientButton
            label={completedCount === 0 ? 'Start Quiz Now' : 'Continue Quiz'}
            icon="▶"
            onPress={() => navigation.navigate('Quiz', { levelId: nextLevelId })}
            style={{ marginTop: 12 }}
          />
        </Card>

        <Text style={styles.sectionTitle}>Levels</Text>

        {QUIZ_LEVELS.map(level => (
          <LevelCard
            key={level.id}
            level={level}
            bestScore={bestFor(level.id)}
            onPress={() => navigation.navigate('Quiz', { levelId: level.id })}
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heroIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${Colors.accentCyan}22`,
    borderWidth: 1,
    borderColor: Colors.cardBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: {
    fontSize: 22,
  },
  heroTitle: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
  },
  heroSub: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  sectionTitle: {
    color: Colors.textSecondary,
    fontSize: fs(13),
    fontWeight: FontWeight.semibold as any,
    letterSpacing: 0.2,
    marginTop: 4,
  },
});
