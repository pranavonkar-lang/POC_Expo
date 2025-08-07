import { Tabs, useNavigation } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import screensPath from "@/app/screensPath";
import { Ionicons } from "@expo/vector-icons";
import IconCardWithCount from "@/components/IconCardWithCount";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerRight: () => (
            <IconCardWithCount
              containerStyle={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: '#f0f0f0',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                elevation: 2,
                marginHorizontal:20,
              }}
              icon={<Ionicons name="cart" size={18} color="#007AFF" />}
              storageKey="count"
            />
          ),
          
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name={screensPath.profile}
        options={{
          title: "Profile",
          headerShown:true,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name={screensPath.settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gear" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
