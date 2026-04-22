import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { Card } from '../components/common/Card';
import { Colors } from '../theme/colors';
import { Radius, FontWeight } from '../theme/spacing';
import { fs, ms, getScreen, getScreenSize, isAndroid } from '../utils/responsive';
import { AppAssets } from '../assets';
import { getZoneById } from '../data/zones';
import { getCategoryColor, getCategoryEmoji } from '../data/categories';
import { isZoneSaved, toggleSavedZone } from '../store/savedStore';
import { RootStackParamList, RootNavProp } from '../types/navigation';

const { width } = getScreen();

export function ZoneDetailScreen() {
  const navigation = useNavigation<RootNavProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'ZoneDetail'>>();
  const { zoneId } = route.params;
  const zone = getZoneById(zoneId);
  const { isVerySmall } = getScreenSize();

  const [saved, setSaved] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (zoneId) isZoneSaved(zoneId).then(setSaved);
    }, [zoneId])
  );

  if (!zone) {
    return (
      <ScreenContainer>
        <View style={styles.notFound}>
          <Text style={styles.notFoundTxt}>Zone not found</Text>
        </View>
      </ScreenContainer>
    );
  }

  const catColor = getCategoryColor(zone.category);

  const handleSave = async () => {
    const updated = await toggleSavedZone(zone.id);
    setSaved(updated.includes(zone.id));
  };

  const handleShare = async () => {
    await Share.share({
      message: `${zone.name} · ${zone.city}\n📍 ${zone.lat}, ${zone.lon}\n\n${zone.tagline}`,
    });
  };

  const imgHeight = isVerySmall ? width * 0.55 : width * 0.68;

  return (
    <ScreenContainer noSafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
      >
        <View style={{ height: imgHeight }}>
          <Image
            source={AppAssets.zones[zone.imageKey]}
            style={styles.heroImg}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['rgba(5,8,20,0)', 'rgba(5,8,20,0.7)']}
            style={styles.heroGradient}
          />

          <View style={[styles.topBar, { paddingTop: isAndroid ? 30 : 48 }]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.75}
              style={styles.circleBtn}
            >
              <Text style={styles.backTxt}>‹</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity
                onPress={handleShare}
                activeOpacity={0.75}
                style={styles.circleBtn}
              >
                <Text style={styles.actionEmoji}>↗</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSave}
                activeOpacity={0.75}
                style={[
                  styles.circleBtn,
                  saved && { backgroundColor: Colors.accentCyan, borderColor: Colors.accentCyan },
                ]}
              >
                <Text
                  style={[
                    styles.actionEmoji,
                    saved && { color: Colors.black },
                  ]}
                >
                  🔖
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View style={[styles.catBadge, { borderColor: catColor, backgroundColor: `${catColor}22` }]}>
            <Text style={[styles.catText, { color: catColor }]}>
              {getCategoryEmoji(zone.category)}  {zone.category.charAt(0).toUpperCase() + zone.category.slice(1)}
            </Text>
          </View>

          <Text style={styles.title}>{zone.name}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.coords}>📍 {zone.lat.toFixed(4)}, {zone.lon.toFixed(4)}</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.city}>{zone.city}</Text>
          </View>

          <Card padded>
            <Text style={styles.overviewLabel}>Overview</Text>
            <Text style={styles.overviewText}>{zone.description}</Text>
          </Card>

          <Card padded>
            <Text style={styles.overviewLabel}>Tagline</Text>
            <Text style={styles.tagline}>{zone.tagline}</Text>
          </Card>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: FontWeight.semibold as any,
  },
  heroImg: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '55%',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: ms(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleBtn: {
    width: 38,
    height: 38,
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(10, 16, 38, 0.75)',
    borderWidth: 1,
    borderColor: Colors.cardBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backTxt: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: FontWeight.bold as any,
    marginTop: -2,
  },
  actionEmoji: {
    color: Colors.white,
    fontSize: 16,
  },
  body: {
    paddingHorizontal: ms(20),
    paddingTop: ms(16),
    gap: 12,
  },
  catBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    borderWidth: 1,
    marginTop: 6,
  },
  catText: {
    fontSize: 11,
    fontWeight: FontWeight.bold as any,
  },
  title: {
    color: Colors.white,
    fontSize: fs(26),
    fontWeight: FontWeight.extrabold as any,
    lineHeight: fs(32),
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  coords: {
    color: Colors.textSecondary,
    fontSize: fs(13),
    fontWeight: FontWeight.semibold as any,
  },
  city: {
    color: Colors.textTertiary,
    fontSize: fs(12),
  },
  overviewLabel: {
    color: Colors.accentCyan,
    fontSize: fs(13),
    fontWeight: FontWeight.bold as any,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  overviewText: {
    color: Colors.textSecondary,
    fontSize: fs(14),
    lineHeight: fs(22),
  },
  tagline: {
    color: Colors.white,
    fontSize: fs(15),
    fontWeight: FontWeight.semibold as any,
    lineHeight: fs(22),
  },
});
