import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ZoneWithImage } from '../../data/zones';
import { AppAssets } from '../../assets';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms, getScreenSize } from '../../utils/responsive';
import { getCategoryEmoji, getCategoryColor } from '../../data/categories';

interface Props {
  zone: ZoneWithImage;
  onPress: () => void;
  saved?: boolean;
  onToggleSave?: () => void;
  showCategory?: boolean;
}

export function ZoneCard({ zone, onPress, saved, onToggleSave, showCategory }: Props) {
  const { isVerySmall } = getScreenSize();
  const image = AppAssets.zones[zone.imageKey];
  const catColor = getCategoryColor(zone.category);

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
      <View style={[styles.imageWrap, { height: isVerySmall ? ms(140) : ms(170) }]}>
        <Image source={image} style={styles.image} resizeMode="cover" />

        {showCategory ? (
          <View style={[styles.catBadge, { backgroundColor: `${catColor}30`, borderColor: catColor }]}>
            <Text style={[styles.catText, { color: catColor }]} numberOfLines={1}>
              {getCategoryEmoji(zone.category)}  {zone.category.charAt(0).toUpperCase() + zone.category.slice(1)}
            </Text>
          </View>
        ) : null}

        {onToggleSave ? (
          <TouchableOpacity
            onPress={onToggleSave}
            activeOpacity={0.8}
            style={[
              styles.saveBtn,
              saved && { backgroundColor: Colors.accentCyan, borderColor: Colors.accentCyan },
            ]}
          >
            <Text style={{ fontSize: fs(14), color: saved ? Colors.black : Colors.white }}>
              {saved ? '🔖' : '📑'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.body}>
        <Text style={[styles.title, { fontSize: fs(isVerySmall ? 15 : 17) }]} numberOfLines={1}>
          {zone.name}
        </Text>
        <Text style={[styles.sub, { fontSize: fs(12) }]} numberOfLines={2}>
          {zone.tagline}
        </Text>
        <View style={styles.coordsRow}>
          <Text style={styles.pin}>📍</Text>
          <Text style={styles.coords} numberOfLines={1}>
            {zone.lat.toFixed(4)}, {zone.lon.toFixed(4)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },
  imageWrap: {
    width: '100%',
    backgroundColor: Colors.cardActive,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  catBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  catText: {
    fontSize: 11,
    fontWeight: FontWeight.bold as any,
  },
  saveBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 34,
    height: 34,
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderWidth: 1,
    borderColor: Colors.cardBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    padding: 12,
    gap: 4,
  },
  title: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
  },
  sub: {
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  coordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  pin: {
    fontSize: 12,
  },
  coords: {
    color: Colors.textTertiary,
    fontSize: 12,
    fontWeight: FontWeight.semibold as any,
  },
});
