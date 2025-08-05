import * as React from 'react';
import { View } from 'react-native';
import NavigationService from '@/app/services/navigationServices';
import { Button } from '@react-navigation/elements';

export default function NotificationsScreen(props:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => NavigationService.back()}>Go back home</Button>
    </View>
  );
}