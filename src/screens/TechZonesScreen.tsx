import React, { useMemo, useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { Chip } from '../components/common/Chip';
import { ZoneCard } from '../components/zone/ZoneCard';
import { ZONES } from '../data/zones';
import { CATEGORIES } from '../data/categories';
import { Category } from '../types/zone';
import { RootNavProp } from '../types/navigation';
import { ms } from '../utils/responsive';

export function TechZonesScreen() {
  const navigation = useNavigation<RootNavProp>();
  const [category, setCategory] = useState<Category['id']>('all');

  const filtered = useMemo(() => {
    if (category === 'all') return ZONES;
    return ZONES.filter(z => z.category === category);
  }, [category]);

  return (
    <ScreenContainer>
      <ScreenHeader title="Tech Zones" subtitle="Discover cutting-edge locations" large />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catList}
        style={styles.catScroll}
      >
        {CATEGORIES.map(c => (
          <Chip
            key={c.id}
            label={c.label}
            emoji={c.id === 'all' ? undefined : c.emoji}
            selected={category === c.id}
            onPress={() => setCategory(c.id)}
            accentColor={c.color}
          />
        ))}
      </ScrollView>

      <FlatList
        data={filtered}
        keyExtractor={z => z.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        renderItem={({ item }) => (
          <ZoneCard
            zone={item}
            showCategory
            onPress={() => navigation.navigate('ZoneDetail', { zoneId: item.id })}
          />
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  catScroll: {
    flexGrow: 0,
  },
  catList: {
    paddingHorizontal: ms(20),
    paddingVertical: 14,
    gap: 8,
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: ms(20),
    paddingTop: 6,
    paddingBottom: 160,
  },
});
