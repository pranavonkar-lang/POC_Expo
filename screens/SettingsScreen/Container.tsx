import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import NavigationService from "@/app/services/navigationServices";
import  screensPath  from "@/app/screensPath";
import SettingsScreen from "./View";
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from "expo-router";

export default function Container(props: any) {
  const params = useLocalSearchParams();

  const theme = params.theme as string;
  const userId = params.userId as string;

  const navigation = useNavigation();

  const goBack = () => {
    NavigationService.back();
    // navigation.dispatch(DrawerActions.openDrawer())
  };

  const goNext = () => {
    NavigationService.navigateWithOrigin(screensPath.settings2,screensPath.settingsTab);
  };

  const resetToHome = () => {
    NavigationService.replace(screensPath.tabs);
  };

  return (
    <SettingsScreen
      theme={theme}
      userId={userId}
      goBack={goBack}
      resetToHome={resetToHome}
      goNext={goNext}
    />
  );
}
