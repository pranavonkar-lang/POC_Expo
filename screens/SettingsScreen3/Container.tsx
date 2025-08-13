import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import NavigationService from "@/app/services/navigationServices";
import screensPath from "@/app/screensPath";
import SettingsScreen3 from "./View";

export default function Container(props: any) {
  const params = useLocalSearchParams();

  const theme = params.theme as string;
  const userId = params.userId as string;

  const goBack = () => {
    NavigationService.back();
  };

  const resetToHome = () => {
    NavigationService.navigateToTab();
  };

  const resetToProfile = () => {
    NavigationService.replace(screensPath.profile);
  };

  const resetToSettings = () => {
    NavigationService.replace(screensPath.settingsTab);
  };

  return (
    <SettingsScreen3
      theme={theme}
      userId={userId}
      goBack={goBack}
      resetToHome={resetToHome}
      resetToProfile={resetToProfile}
      resetToSettings={resetToSettings}
    />
  );
}
