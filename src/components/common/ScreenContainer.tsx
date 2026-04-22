import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../theme/colors';
import { isAndroid } from '../../utils/responsive';

interface Props {
  children: React.ReactNode;
  edges?: ('top' | 'left' | 'right' | 'bottom')[];
  noSafeArea?: boolean;
  noGradient?: boolean;
}

export function ScreenContainer({
  children,
  edges = ['top', 'left', 'right'],
  noSafeArea,
  noGradient,
}: Props) {
  const Content = (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.bgRoot} translucent={false} />
      {noGradient ? null : (
        <LinearGradient
          colors={[Colors.bgGradientStart, Colors.bgGradientMid, Colors.bgGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {children}
    </>
  );

  if (noSafeArea) {
    return <View style={[styles.root, { paddingTop: isAndroid ? 20 : 0 }]}>{Content}</View>;
  }

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.root, isAndroid && styles.rootAndroid]}
    >
      {Content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bgRoot,
  },
  rootAndroid: {
    paddingTop: 20,
  },
});
