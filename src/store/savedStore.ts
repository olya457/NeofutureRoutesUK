import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'neofuture_saved_zones';

export async function getSavedZoneIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function toggleSavedZone(zoneId: string): Promise<string[]> {
  try {
    const current = await getSavedZoneIds();
    const exists = current.includes(zoneId);
    const updated = exists ? current.filter(id => id !== zoneId) : [zoneId, ...current];
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export async function isZoneSaved(zoneId: string): Promise<boolean> {
  const ids = await getSavedZoneIds();
  return ids.includes(zoneId);
}

export async function clearSavedZones(): Promise<void> {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch {}
}
