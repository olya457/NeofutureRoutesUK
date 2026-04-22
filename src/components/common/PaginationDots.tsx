import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

interface Props {
  total: number;
  current: number;
}

export function PaginationDots({ total, current }: Props) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => {
        const active = i === current;
        return (
          <View
            key={i}
            style={[
              styles.dot,
              {
                width: active ? 20 : 6,
                backgroundColor: active ? Colors.accentCyan : 'rgba(255,255,255,0.25)',
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
});
