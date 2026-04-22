import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../screens/SplashScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { ZoneDetailScreen } from '../screens/ZoneDetailScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { QuizResultScreen } from '../screens/QuizResultScreen';
import { MainTabNavigator } from './MainTabNavigator';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen
        name="ZoneDetail"
        component={ZoneDetailScreen}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name="QuizResult"
        component={QuizResultScreen}
        options={{ animation: 'fade' }}
      />
    </Stack.Navigator>
  );
}
