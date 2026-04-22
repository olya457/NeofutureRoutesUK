import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ScreenContainer } from '../components/common/ScreenContainer';
import { ScreenHeader } from '../components/common/ScreenHeader';
import { NoteCard } from '../components/note/NoteCard';
import { DATA_NOTES } from '../data/notes';
import { ms } from '../utils/responsive';

export function DataNotesScreen() {
  return (
    <ScreenContainer>
      <ScreenHeader title="Data Notes" subtitle="Tech insights and facts" large />

      <FlatList
        data={DATA_NOTES}
        keyExtractor={n => n.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: ms(20),
    paddingTop: 6,
    paddingBottom: 160,
  },
});
