import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Radius, FontWeight } from '../../theme/spacing';
import { fs, ms } from '../../utils/responsive';
import { DataNote } from '../../types/note';

interface Props {
  note: DataNote;
}

export function NoteCard({ note }: Props) {
  return (
    <View style={[styles.card, { padding: ms(16) }]}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>
          <Text style={styles.emoji}>{note.emoji}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {note.title}
        </Text>
      </View>
      <Text style={styles.body}>{note.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: `${Colors.accentCyan}1E`,
    borderWidth: 1,
    borderColor: Colors.cardBorderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 18,
  },
  title: {
    flex: 1,
    color: Colors.white,
    fontSize: fs(15),
    fontWeight: FontWeight.bold as any,
    lineHeight: fs(20),
  },
  body: {
    color: Colors.textSecondary,
    fontSize: fs(13),
    lineHeight: fs(20),
  },
});
