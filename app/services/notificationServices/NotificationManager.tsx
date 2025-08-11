import React, { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import type { TimeIntervalTriggerInput } from "expo-notifications";

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
  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);

  useEffect(() => {
    registerForNotifications();

    notificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        console.log("📩 Notification Received:", notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log("📲 Notification Clicked:", response);
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
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
    console.log("FCM Token:", tokenData.data);
    return tokenData.data;
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
