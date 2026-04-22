import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizResult } from '../types/quiz';

const KEY = 'neofuture_quiz_results';

export async function getQuizResults(): Promise<QuizResult[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveQuizResult(result: QuizResult): Promise<void> {
  try {
    const current = await getQuizResults();
    const filtered = current.filter(r => r.levelId !== result.levelId);
    const updated = [result, ...filtered];
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch {}
}

export async function getBestResult(levelId: number): Promise<QuizResult | null> {
  const list = await getQuizResults();
  return list.find(r => r.levelId === levelId) ?? null;
}
