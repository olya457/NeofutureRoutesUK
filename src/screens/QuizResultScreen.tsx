import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { GradientButton } from '../components/common/GradientButton';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { Card } from '../components/common/Card';
import { getLevelById, QUIZ_LEVELS } from '../data/quizData';
import { Colors } from '../theme/colors';
import { FontWeight, Radius } from '../theme/spacing';
import { fs, ms, getScreenSize } from '../utils/responsive';
import { RootStackParamList, RootNavProp } from '../types/navigation';

export function QuizResultScreen() {
  const navigation = useNavigation<RootNavProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'QuizResult'>>();
  const { levelId, score, total } = route.params;
  const { isVerySmall } = getScreenSize();

  const level = useMemo(() => getLevelById(levelId), [levelId]);
  const percent = Math.round((score / total) * 100);
  const isGood = percent >= 66;

  const ringColors: [string, string] = isGood
    ? [Colors.accentGreen, Colors.accentCyan]
    : [Colors.accentOrange, '#FF5C8A'];

  const nextLevel = QUIZ_LEVELS.find(l => l.id > levelId);

  const handleNext = () => {
    if (isGood && nextLevel) {
      navigation.replace('Quiz', { levelId: nextLevel.id });
    } else {
      navigation.replace('Quiz', { levelId });
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.wrap}>
        <LinearGradient
          colors={ringColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.ring,
            {
              width: isVerySmall ? 130 : 160,
              height: isVerySmall ? 130 : 160,
              borderRadius: isVerySmall ? 65 : 80,
            },
          ]}
        >
          <View style={styles.ringInner}>
            <Text style={[styles.trophy, { fontSize: fs(isVerySmall ? 54 : 68) }]}>🏆</Text>
          </View>
        </LinearGradient>

        <Text style={[styles.title, { fontSize: fs(isVerySmall ? 22 : 28) }]}>
          {isGood ? 'Signal confirmed.' : 'Good Effort!'}
        </Text>

        <Text style={[styles.sub, { fontSize: fs(13) }]}>
          {isGood
            ? 'You see how it works.\nMove forward and unlock more.'
            : 'Keep learning about technology and try again to improve your score!'}
        </Text>

        <Card padded bordered style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Your Score</Text>
          <Text style={[styles.scoreValue, { color: isGood ? Colors.accentCyan : Colors.accentCyan }]}>
            {score}/{total}
          </Text>
          <Text style={[styles.percent, { color: isGood ? Colors.accentGreen : Colors.accentOrange }]}>
            {percent}%
          </Text>
          {level ? (
            <Text style={styles.meta}>
              {level.emoji}  Level {level.id} · {level.title}
            </Text>
          ) : null}
        </Card>

        <View style={styles.actions}>
          <GradientButton
            label={isGood && nextLevel ? 'Next Level' : 'Try Again'}
            icon={isGood ? '➤' : '↻'}
            onPress={handleNext}
          />
          <SecondaryButton
            label="Back to Signal Check"
            onPress={() => navigation.navigate('Main')}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: ms(24),
    paddingTop: ms(24),
    paddingBottom: ms(30),
    gap: 14,
    justifyContent: 'center',
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    marginBottom: 8,
  },
  ringInner: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.bgGradientEnd,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophy: {},
  title: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
    textAlign: 'center',
  },
  sub: {
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: fs(19),
  },
  scoreCard: {
    width: '100%',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  scoreLabel: {
    color: Colors.textTertiary,
    fontSize: fs(12),
    fontWeight: FontWeight.semibold as any,
  },
  scoreValue: {
    fontSize: fs(48),
    fontWeight: FontWeight.extrabold as any,
  },
  percent: {
    fontSize: fs(18),
    fontWeight: FontWeight.bold as any,
  },
  meta: {
    color: Colors.textSecondary,
    fontSize: fs(12),
    marginTop: 2,
  },
  actions: {
    width: '100%',
    gap: 8,
    marginTop: 12,
  },
});
