import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';

interface Props {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GradientButton({
  label,
  onPress,
  style,
  disabled,
  loading,
  icon,
  size = 'md',
}: Props) {
  const sizeConfig = {
    sm: {
      minHeight: ms(48),
      paddingVertical: ms(12),
      paddingHorizontal: ms(18),
      fontSize: fs(14),
      lineHeight: fs(20),
      iconSize: fs(14),
    },
    md: {
      minHeight: ms(56),
      paddingVertical: ms(16),
      paddingHorizontal: ms(24),
      fontSize: fs(15),
      lineHeight: fs(22),
      iconSize: fs(15),
    },
    lg: {
      minHeight: ms(62),
      paddingVertical: ms(18),
      paddingHorizontal: ms(28),
      fontSize: fs(16),
      lineHeight: fs(24),
      iconSize: fs(16),
    },
  }[size];

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.wrap, disabled || loading ? styles.disabled : null, style]}
    >
      <View
        style={[
          styles.btn,
          {
            minHeight: sizeConfig.minHeight,
            borderRadius: Radius.pill,
          },
        ]}
      >
        <LinearGradient
          colors={[Colors.buttonGradientStart, Colors.buttonGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[StyleSheet.absoluteFillObject, { borderRadius: Radius.pill }]}
        />
        <View
          style={[
            styles.content,
            {
              paddingVertical: sizeConfig.paddingVertical,
              paddingHorizontal: sizeConfig.paddingHorizontal,
            },
          ]}
        >
          {loading ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <View style={styles.row}>
              {icon ? (
                <Text
                  numberOfLines={1}
                  allowFontScaling={false}
                  style={[
                    styles.icon,
                    {
                      fontSize: sizeConfig.iconSize,
                      lineHeight: sizeConfig.lineHeight,
                      marginRight: ms(6),
                    },
                  ]}
                >
                  {icon}
                </Text>
              ) : null}

              <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={[
                  styles.label,
                  {
                    fontSize: sizeConfig.fontSize,
                    lineHeight: sizeConfig.lineHeight,
                  } as TextStyle,
                ]}
              >
                {label}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  disabled: {
    opacity: 0.55,
  },
  btn: {
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
  },
  label: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
    letterSpacing: 0.2,
    includeFontPadding: false,
    textAlign: 'center',
  },
  icon: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
    includeFontPadding: false,
    textAlign: 'center',
  },
});
