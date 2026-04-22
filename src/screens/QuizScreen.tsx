import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { ProgressBar } from '../components/common/ProgressBar';
import { QuizOption } from '../components/quiz/QuizOption';
import { GradientButton } from '../components/common/GradientButton';
import { Card } from '../components/common/Card';
import { getLevelById } from '../data/quizData';
import { saveQuizResult } from '../store/quizStore';
import { Colors } from '../theme/colors';
import { FontWeight } from '../theme/spacing';
import { fs, ms, getScreenSize } from '../utils/responsive';
import { RootStackParamList, RootNavProp } from '../types/navigation';

export function QuizScreen() {
  const navigation = useNavigation<RootNavProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'Quiz'>>();
  const { levelId } = route.params;
  const { isVerySmall } = getScreenSize();

  const level = useMemo(() => getLevelById(levelId), [levelId]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answeredIds, setAnsweredIds] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  if (!level) {
    return (
      <ScreenContainer>
        <ScreenHeader title="Level not found" onBack={() => navigation.goBack()} />
      </ScreenContainer>
    );
  }

  const total = level.questions.length;
  const q = level.questions[questionIndex];
  const isAnswered = selectedIndex !== null;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIndex(idx);
    const correct = q.answers[idx].correct;
    if (correct) setScore(s => s + 1);
    setAnsweredIds(prev => ({ ...prev, [q.id]: idx }));
  };

  const handleNext = async () => {
    if (questionIndex < total - 1) {
      setQuestionIndex(i => i + 1);
      setSelectedIndex(null);
      return;
    }

    await saveQuizResult({
      levelId: level.id,
      score,
      total,
      completedAt: Date.now(),
    });

    navigation.replace('QuizResult', {
      levelId: level.id,
      score,
      total,
    });
  };

  return (
    <ScreenContainer>
      <ScreenHeader
        title={`Question ${questionIndex + 1} of ${total}`}
        onBack={() => navigation.goBack()}
      />

      <View style={{ paddingHorizontal: ms(20), paddingTop: 4 }}>
        <ProgressBar progress={(questionIndex + (isAnswered ? 1 : 0)) / total} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: ms(20),
          paddingTop: 14,
          paddingBottom: 40,
          gap: 14,
        }}
      >
        <View style={styles.levelTag}>
          <Text style={styles.levelEmoji}>{level.emoji}</Text>
          <Text style={styles.levelText}>Level {level.id} · {level.title}</Text>
        </View>

        <Card padded>
          <Text
            style={[
              styles.question,
              { fontSize: fs(isVerySmall ? 15 : 17) },
            ]}
          >
            {q.question}
          </Text>
        </Card>

        <View style={styles.answers}>
          {q.answers.map((a, idx) => {
            const isSelected = selectedIndex === idx;
            const showCorrect = isAnswered && a.correct;
            const showWrong = isAnswered && isSelected && !a.correct;

            return (
              <QuizOption
                key={idx}
                label={a.text}
                selected={isSelected && !isAnswered}
                correct={showCorrect}
                wrong={showWrong}
                disabled={isAnswered}
                onPress={() => handleSelect(idx)}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <GradientButton
          label={questionIndex < total - 1 ? 'Next Question' : 'See Result'}
          icon="➤"
          onPress={handleNext}
          disabled={!isAnswered}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  levelTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
  },
  levelEmoji: {
    fontSize: 18,
  },
  levelText: {
    color: Colors.textSecondary,
    fontSize: fs(12),
    fontWeight: FontWeight.semibold as any,
  },
  question: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
    lineHeight: 24,
  },
  answers: {
    gap: 10,
    marginTop: 2,
  },
  footer: {
    paddingHorizontal: ms(20),
    paddingBottom: ms(54),
    paddingTop: 8,
  },
});
