import  screensPath  from "@/app/screensPath";
import NavigationService from "@/app/services/navigationServices";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import SettingsScreen2 from "./View";

export default function Container(props: any) {
  const params = useLocalSearchParams();

  const theme = params.theme as string;
  const userId = params.userId as string;

  const goBack = () => {
    NavigationService.back();
  };

  const goNext = () => {
    NavigationService.push(screensPath.settings3);
  };

  const resetToHome = () => {
    NavigationService.replace(screensPath.tabs);
  };

  return (
    <SettingsScreen2
      theme={theme}
      userId={userId}
      goBack={goBack}
      resetToHome={resetToHome}
      goNext={goNext}
    />
  );
}
