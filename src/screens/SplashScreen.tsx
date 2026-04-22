import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Animated, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/colors';
import { RootNavProp } from '../types/navigation';
import { getScreen, fs } from '../utils/responsive';
import { AppAssets } from '../assets';
import { FontWeight } from '../theme/spacing';

const { width, height } = getScreen();
const LOGO_SIZE = Math.min(width * 0.42, 200);

const SPINNER_HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%; height: 100%;
      background: radial-gradient(circle at 50% 50%, #0a1436 0%, #040613 70%, #000 100%);
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .loader {
      position: relative;
      width: 160px; height: 160px;
    }
    .arc {
      position: absolute; inset: 0;
      border: 1.5px solid transparent;
      border-top-color: rgba(255,255,255,0.18);
      border-radius: 50%;
      animation: spin 2.2s linear infinite;
    }
    .dot-core {
      position: absolute; top: 50%; left: 50%;
      width: 22px; height: 22px;
      background: #eaf4ff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 22px rgba(255,255,255,0.6);
    }
    .orbit {
      position: absolute; inset: 0;
      animation: spin 3.2s linear infinite;
    }
    .dot {
      position: absolute;
      width: 6px; height: 6px;
      background: #e9f4ff;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255,255,255,0.6);
    }
    .d1 { top: 6px; left: 50%; transform: translateX(-50%); }
    .d2 { bottom: 6px; left: 50%; transform: translateX(-50%); }
    .d3 { left: 6px; top: 50%; transform: translateY(-50%); }
    .d4 { right: 6px; top: 50%; transform: translateY(-50%); }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="loader">
    <div class="arc"></div>
    <div class="orbit">
      <div class="dot d1"></div>
      <div class="dot d2"></div>
      <div class="dot d3"></div>
      <div class="dot d4"></div>
    </div>
    <div class="dot-core"></div>
  </div>
</body>
</html>
`;

type Phase = 'web' | 'logo';

export function SplashScreen() {
  const navigation = useNavigation<RootNavProp>();
  const [phase, setPhase] = useState<Phase>('web');

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 3000);
    const t2 = setTimeout(() => navigation.replace('Onboarding'), 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [navigation]);

  useEffect(() => {
    if (phase !== 'logo') return;

    opacity.setValue(0);
    scale.setValue(0.9);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        tension: 50,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulse, { toValue: 1.05, duration: 900, useNativeDriver: true }),
          Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
        ])
      ).start();
    });
  }, [phase, opacity, scale, pulse]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {phase === 'web' ? (
        <WebView
          source={{ html: SPINNER_HTML }}
          style={styles.web}
          javaScriptEnabled
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          backgroundColor="transparent"
          originWhitelist={['*']}
        />
      ) : (
        <Animated.View
          style={[
            styles.logoWrap,
            {
              opacity,
              transform: [{ scale: Animated.multiply(scale, pulse) }],
            },
          ]}
        >
          <Image source={AppAssets.logo} style={styles.logo} resizeMode="contain" />
       
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgRoot,
    alignItems: 'center',
    justifyContent: 'center',
  },
  web: {
    width,
    height,
    backgroundColor: Colors.bgRoot,
  },
  logoWrap: {
    alignItems: 'center',
    gap: 18,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  brand: {
    color: Colors.white,
    fontSize: fs(26),
    fontWeight: FontWeight.extrabold as any,
    letterSpacing: 6,
  },
  subBrand: {
    color: Colors.accentCyan,
    fontSize: fs(14),
    fontWeight: FontWeight.semibold as any,
    letterSpacing: 3,
    marginTop: -8,
  },
});
