import React, { useCallback, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { EmptyState } from '../components/common/EmptyState';
import { GradientButton } from '../components/common/GradientButton';
import { ZoneCard } from '../components/zone/ZoneCard';
import { ZONES, ZoneWithImage } from '../data/zones';
import { getSavedZoneIds, toggleSavedZone } from '../store/savedStore';
import { AppNavProp } from '../types/navigation';
import { ms } from '../utils/responsive';

export function SavedScreen() {
  const navigation = useNavigation<AppNavProp>();
  const [ids, setIds] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      getSavedZoneIds().then(setIds);
    }, [])
  );

  const saved = ids
    .map(id => ZONES.find(z => z.id === id))
    .filter((z): z is ZoneWithImage => !!z);

  const handleToggle = async (id: string) => {
    const updated = await toggleSavedZone(id);
    setIds(updated);
  };

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Saved Points"
        subtitle={`${saved.length} saved location${saved.length === 1 ? '' : 's'}`}
        large
      />

      {saved.length === 0 ? (
        <View style={styles.emptyWrap}>
          <EmptyState
            emoji="🔖"
            title="No Saved Locations"
            description="You haven't saved any tech locations yet. Explore Tech Zones and save your favorites!"
          >
            <GradientButton
              label="Explore Tech Zones"
              icon="➤"
              onPress={() => navigation.navigate('TechZones')}
            />
          </EmptyState>
        </View>
      ) : (
        <FlatList
          data={saved}
          keyExtractor={z => z.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          renderItem={({ item }) => (
            <ZoneCard
              zone={item}
              saved
              onToggleSave={() => handleToggle(item.id)}
              showCategory
              onPress={() => navigation.navigate('ZoneDetail', { zoneId: item.id })}
            />
          )}
        />
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  emptyWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 130,
  },
  list: {
    paddingHorizontal: ms(20),
    paddingTop: 6,
    paddingBottom: 160,
  },
});
