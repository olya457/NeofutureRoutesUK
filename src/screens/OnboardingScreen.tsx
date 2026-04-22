import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { PaginationDots } from '../components/common/PaginationDots';
import { GradientButton } from '../components/common/GradientButton';
import { Colors } from '../theme/colors';
import { Radius, FontWeight } from '../theme/spacing';
import { fs, ms, getScreenSize } from '../utils/responsive';
import { RootNavProp } from '../types/navigation';

interface Slide {
  emoji: string;
  title: string;
  description: string;
  ring: [string, string];
}

const SLIDES: Slide[] = [
  {
    emoji: '🌍',
    title: 'Explore Tech Zones',
    description:
      'Discover cutting-edge technology locations across the UK, from fusion reactors to underground labs',
    ring: ['#2E7BFF', '#3CDFFF'],
  },
  {
    emoji: '🗺️',
    title: 'Interactive Signal Map',
    description:
      'Navigate an interactive map showing all tech locations with detailed information and coordinates',
    ring: ['#22E396', '#3CDFFF'],
  },
  {
    emoji: '🚀',
    title: 'Test Your Knowledge',
    description:
      'Challenge yourself with quizzes about technology, systems, and scientific innovations',
    ring: ['#F59E0B', '#FF5C8A'],
  },
  {
    emoji: '🧬',
    title: 'Deep Tech Insights',
    description:
      'Access detailed facts and insights about advanced technological systems and infrastructure',
    ring: ['#3CDFFF', '#A78BFA'],
  },
  {
    emoji: '🔖',
    title: 'Save & Share',
    description:
      'Bookmark your favorite locations and share discoveries with your network',
    ring: ['#A78BFA', '#2E7BFF'],
  },
];

export function OnboardingScreen() {
  const navigation = useNavigation<RootNavProp>();
  const { isVerySmall } = getScreenSize();
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];
  const isLast = index === SLIDES.length - 1;

  const opacity = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    opacity.setValue(0);
    translate.setValue(20);
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 420, useNativeDriver: true }),
      Animated.timing(translate, { toValue: 0, duration: 420, useNativeDriver: true }),
    ]).start();
  }, [index, opacity, translate]);

  const handleNext = () => {
    if (isLast) navigation.replace('Main');
    else setIndex(i => i + 1);
  };

  const handleSkip = () => navigation.replace('Main');

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.heroWrap,
            {
              opacity,
              transform: [{ translateY: translate }],
            },
          ]}
        >
          <LinearGradient
            colors={slide.ring}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
              styles.ring,
              {
                width: isVerySmall ? 180 : 220,
                height: isVerySmall ? 180 : 220,
                borderRadius: isVerySmall ? 90 : 110,
              },
            ]}
          >
            <View style={styles.ringInner}>
              <Text style={[styles.heroEmoji, { fontSize: fs(isVerySmall ? 72 : 90) }]}>
                {slide.emoji}
              </Text>
            </View>
          </LinearGradient>
        </Animated.View>

        <View style={styles.dotsWrap}>
          <PaginationDots total={SLIDES.length} current={index} />
        </View>

        <Animated.View style={[styles.texts, { opacity }]}>
          <Text
            style={[
              styles.title,
              { fontSize: fs(isVerySmall ? 24 : 30) },
            ]}
          >
            {slide.title}
          </Text>
          <Text
            style={[
              styles.description,
              {
                fontSize: fs(isVerySmall ? 13 : 14),
                lineHeight: fs(isVerySmall ? 20 : 22),
              },
            ]}
          >
            {slide.description}
          </Text>
        </Animated.View>

        <View style={styles.actions}>
          <GradientButton
            label={isLast ? 'Get Started' : 'Next'}
            icon="➤"
            onPress={handleNext}
          />
          {!isLast ? (
            <TouchableOpacity onPress={handleSkip} activeOpacity={0.7} style={styles.skip}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.skip} />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: ms(22),
    paddingTop: ms(10),
    paddingBottom: ms(30),
    justifyContent: 'space-between',
  },
  heroWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -30,
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  ringInner: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.bgGradientEnd,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroEmoji: {},
  dotsWrap: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  texts: {
    gap: 8,
    marginBottom: ms(22),
  },
  title: {
    color: Colors.white,
    fontWeight: FontWeight.extrabold as any,
  },
  description: {
    color: Colors.textSecondary,
  },
  actions: {
    gap: 8,
  },
  skip: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    color: Colors.textSecondary,
    fontSize: fs(13),
    fontWeight: FontWeight.semibold as any,
  },
});
