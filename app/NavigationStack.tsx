import { View, Text, useColorScheme, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import screensPath from "./screensPath";
import { useAppDispatch, useAppSelector } from "@/store/common/hooks";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken } from "./services/apiServices/apiConstant";
import NavigationService from "./services/navigationServices";


export default function NavigationStack() {
  
  // const token = useAppSelector((state: any) => state.auth?.user?.accessToken);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      // console.log('TT01 : token', token);
      if(token){
        NavigationService.replace(screensPath.tabs)
      }
    };
    fetchToken();
  }, []);

const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName={screensPath.login}>
        <Stack.Screen
          name={screensPath.login}
          options={{ title: "LoginScreen", headerShown: false }}
        />
        <Stack.Screen
          name={screensPath.tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screensPath.settings2}
          options={{ title: "Settings2", headerShown: false }}
        />
        <Stack.Screen
          name={screensPath.settings3}
          options={{ title: "Settings3", headerShown: false }}
        />
        <Stack.Screen
          name={screensPath.settings4}
          options={{ title: "Settings4", headerShown: false }}
        />
        <Stack.Screen name={screensPath.notFound} />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  );
}
