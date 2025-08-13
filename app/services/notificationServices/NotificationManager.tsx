import React, { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import type { TimeIntervalTriggerInput } from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function NotificationManager() {

  useEffect(() => {
    registerForNotifications();
    
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: remoteMessage.notification?.title ?? "No title",
          body: remoteMessage.notification?.body ?? "",
          data: remoteMessage.data,
        },
        trigger: null,
      });
    });

    return unsubscribe;
  }, []);


  async function registerForNotifications() {
    if (!Device.isDevice) {
      console.warn("Notifications only work on physical devices");
      return;
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      console.warn("Permission for notifications not granted!");
      return;
    }

    const tokenData = await Notifications.getDevicePushTokenAsync();
    AsyncStorage.setItem("fcmToken", tokenData.data);
  }

  return null;
}

export async function scheduleLocalNotification(
  title: string,
  body: string,
  delaySeconds: number = 5
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: {
      seconds: delaySeconds,
      repeats: false,
    } as TimeIntervalTriggerInput,
  });
}
