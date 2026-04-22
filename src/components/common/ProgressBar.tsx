import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/colors';

interface Props {
  progress: number;
  height?: number;
  style?: ViewStyle;
}

export function ProgressBar({ progress, height = 6, style }: Props) {
  const clamped = Math.max(0, Math.min(progress, 1));

  return (
    <View
      style={[
        styles.track,
        {
          height,
          borderRadius: height / 2,
          backgroundColor: Colors.cardBorder,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={[Colors.buttonGradientStart, Colors.buttonGradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.fill,
          {
            width: `${clamped * 100}%`,
            borderRadius: height / 2,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
