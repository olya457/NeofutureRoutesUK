import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ZoneWithImage } from '../../data/zones';
import { AppAssets } from '../../assets';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms, getScreenSize } from '../../utils/responsive';
import { getCategoryColor, getCategoryEmoji } from '../../data/categories';
import { GradientButton } from '../common/GradientButton';

interface Props {
  zone: ZoneWithImage;
  onClose: () => void;
  onOpenDetail: () => void;
}

export function MapCallout({ zone, onClose, onOpenDetail }: Props) {
  const { isVerySmall } = getScreenSize();
  const catColor = getCategoryColor(zone.category);

  return (
    <View style={[styles.wrap, { padding: ms(12) }]}>
      <View style={[styles.imageWrap, { height: isVerySmall ? ms(100) : ms(120) }]}>
        <Image source={AppAssets.zones[zone.imageKey]} style={styles.image} resizeMode="cover" />
        <TouchableOpacity onPress={onClose} style={styles.closeBtn} activeOpacity={0.8}>
          <Text style={styles.closeTxt}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.catBadge, { borderColor: catColor, backgroundColor: `${catColor}22` }]}>
        <Text style={{ color: catColor, fontSize: fs(11), fontWeight: FontWeight.bold as any }}>
          {getCategoryEmoji(zone.category)}  {zone.category}
        </Text>
      </View>

      <Text style={[styles.title, { fontSize: fs(isVerySmall ? 15 : 17) }]} numberOfLines={1}>
        {zone.name}
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {zone.tagline}
      </Text>

      <View style={styles.coordsRow}>
        <Text style={styles.coords}>
          📍 {zone.lat.toFixed(4)}, {zone.lon.toFixed(4)}
        </Text>
        <View style={{ flex: 1 }} />
      </View>

      <GradientButton label="View Details" icon="➤" size="sm" onPress={onOpenDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorderStrong,
    gap: 8,
  },
  imageWrap: {
    width: '100%',
    borderRadius: Radius.md,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: Colors.cardActive,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeBtn: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 28,
    height: 28,
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeTxt: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: FontWeight.bold as any,
  },
  catBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    borderWidth: 1,
    marginTop: 2,
  },
  title: {
    color: Colors.white,
    fontWeight: FontWeight.bold as any,
  },
  desc: {
    color: Colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },
  coordsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coords: {
    color: Colors.textTertiary,
    fontSize: 12,
    fontWeight: FontWeight.semibold as any,
  },
});
