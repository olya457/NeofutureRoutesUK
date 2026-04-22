import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text, LayoutChangeEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { MapPoint } from '../components/zone/MapPoint';
import { MapCallout } from '../components/zone/MapCallout';
import { ZONES } from '../data/zones';
import { getCategoryColor } from '../data/categories';
import { Colors } from '../theme/colors';
import { ms } from '../utils/responsive';
import { RootNavProp } from '../types/navigation';

export function SignalMapScreen() {
  const navigation = useNavigation<RootNavProp>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mapSize, setMapSize] = useState({ w: 0, h: 0 });

  const selected = useMemo(() => ZONES.find(z => z.id === selectedId), [selectedId]);

  const handleLayout = (e: LayoutChangeEvent) => {
    setMapSize({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height });
  };

  return (
    <ScreenContainer>
      <ScreenHeader title="Signal Map" subtitle="Interactive tech location map" large />

      <View style={styles.mapArea} onLayout={handleLayout}>
        {mapSize.w > 0 ? (
          <>
            <Svg
              width={mapSize.w}
              height={mapSize.h}
              style={StyleSheet.absoluteFill}
              pointerEvents="none"
            >
              {[0.25, 0.5, 0.75].map(p => (
                <Line
                  key={`h-${p}`}
                  x1={0}
                  y1={mapSize.h * p}
                  x2={mapSize.w}
                  y2={mapSize.h * p}
                  stroke={Colors.cardBorder}
                  strokeDasharray="4 6"
                  strokeWidth={0.6}
                />
              ))}
              {[0.25, 0.5, 0.75].map(p => (
                <Line
                  key={`v-${p}`}
                  x1={mapSize.w * p}
                  y1={0}
                  x2={mapSize.w * p}
                  y2={mapSize.h}
                  stroke={Colors.cardBorder}
                  strokeDasharray="4 6"
                  strokeWidth={0.6}
                />
              ))}
              <Circle
                cx={mapSize.w / 2}
                cy={mapSize.h / 2}
                r={Math.min(mapSize.w, mapSize.h) * 0.48}
                stroke={Colors.cardBorder}
                strokeWidth={0.6}
                fill="none"
              />
            </Svg>

            {ZONES.map(z => {
              const x = z.mapX * mapSize.w;
              const y = z.mapY * mapSize.h;
              return (
                <MapPoint
                  key={z.id}
                  x={x}
                  y={y}
                  active={selectedId === z.id}
                  color={getCategoryColor(z.category)}
                  onPress={() => setSelectedId(z.id)}
                />
              );
            })}
          </>
        ) : null}
      </View>

      {selected ? (
        <View style={styles.calloutOverlay} pointerEvents="box-none">
          <View style={styles.backdrop} pointerEvents="none" />
          <View style={styles.calloutContainer}>
            <MapCallout
              zone={selected}
              onClose={() => setSelectedId(null)}
              onOpenDetail={() => navigation.navigate('ZoneDetail', { zoneId: selected.id })}
            />
          </View>
        </View>
      ) : (
        <View style={styles.hintWrap}>
          <Text style={styles.hintText}>Tap any signal point to see details</Text>
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  mapArea: {
    flex: 1,
    marginHorizontal: ms(12),
    marginTop: 4,
    marginBottom: 100,
    borderRadius: 20,
    backgroundColor: 'rgba(10, 22, 50, 0.4)',
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },
  calloutOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(16),
    paddingBottom: 100,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5, 8, 20, 0.55)',
  },
  calloutContainer: {
    width: '100%',
    maxWidth: 420,
  },
  hintWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 130,
    alignItems: 'center',
  },
  hintText: {
    color: Colors.textTertiary,
    fontSize: 12,
  },
});
