import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Main: undefined;
  ZoneDetail: { zoneId: string };
  Quiz: { levelId: number };
  QuizResult: { levelId: number; score: number; total: number };
};

export type MainTabParamList = {
  TechZones: undefined;
  SignalMap: undefined;
  SignalCheck: undefined;
  DataNotes: undefined;
  Saved: undefined;
};

export type RootNavProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavProp = BottomTabNavigationProp<MainTabParamList>;
export type AppNavProp = CompositeNavigationProp<TabNavProp, RootNavProp>;
