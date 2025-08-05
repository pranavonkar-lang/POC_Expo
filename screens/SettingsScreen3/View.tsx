import NavigationService from '@/app/services/navigationServices';
import CustomButton from '@/components/CustomButton';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function SettingsScreen3({theme,userId, goBack, resetToHome, resetToProfile,resetToSettings}:any) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen 3</Text>
      
      {theme && (
        <Text style={styles.param}>Theme: {theme}</Text>
      )}
      {userId && (
        <Text style={styles.param}>User ID: {userId}</Text>
      )}
      
      <CustomButton title="Go Back" onPress={goBack} fullWidth />
      <CustomButton title="Original Tab" onPress={resetToHome} fullWidth />
      {/* <CustomButton title="Reset to Profile" onPress={resetToProfile} fullWidth />
      <CustomButton title="Reset to Settings" onPress={resetToSettings} fullWidth /> */}
    </View>
  );
}

