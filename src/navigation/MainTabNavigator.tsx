import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { TechZonesScreen } from '../screens/TechZonesScreen';
import { SignalMapScreen } from '../screens/SignalMapScreen';
import { SignalCheckScreen } from '../screens/SignalCheckScreen';
import { DataNotesScreen } from '../screens/DataNotesScreen';
import { SavedScreen } from '../screens/SavedScreen';
import { Colors } from '../theme/colors';
import { Radius } from '../theme/spacing';
import { fs, isIOS } from '../utils/responsive';
import { MainTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_META: Record<keyof MainTabParamList, { icon: string }> = {
  TechZones: { icon: '🌐' },
  SignalMap: { icon: '🗺️' },
  SignalCheck: { icon: '🧠' },
  DataNotes: { icon: '📄' },
  Saved: { icon: '🔖' },
};

export function MainTabNavigator() {
  const BOTTOM_OFFSET = isIOS ? 20 : 30;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const meta = TAB_META[route.name as keyof MainTabParamList];
        return {
          headerShown: false,
          tabBarActiveTintColor: Colors.tabActive,
          tabBarInactiveTintColor: Colors.tabInactive,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBar,
            {
              bottom: BOTTOM_OFFSET,
            },
          ],
          tabBarItemStyle: styles.tabItem,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconCircle, focused && styles.iconCircleActive]}>
              <Text style={styles.iconText}>{meta.icon}</Text>
            </View>
          ),
        };
      }}
    >
      <Tab.Screen name="TechZones" component={TechZonesScreen} />
      <Tab.Screen name="SignalMap" component={SignalMapScreen} />
      <Tab.Screen name="SignalCheck" component={SignalCheckScreen} />
      <Tab.Screen name="DataNotes" component={DataNotesScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 68,
    backgroundColor: Colors.tabBg,
    borderColor: Colors.tabBorder,
    borderWidth: 1,
    borderTopWidth: 1,
    borderRadius: Radius.xl,
    elevation: 12,
    shadowColor: Colors.black,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    paddingTop: 8,
    paddingBottom: 8,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleActive: {
    backgroundColor: Colors.tabActiveBg,
  },
  iconText: {
    fontSize: fs(22),
  },
});
