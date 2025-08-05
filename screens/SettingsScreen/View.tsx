import  screensPath  from '@/app/screensPath';
import NavigationService from '@/app/services/navigationServices';
import CustomButton from '@/components/CustomButton';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function SettingsScreen({theme,userId, goBack, resetToHome, goNext}:any) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      
      {theme && (
        <Text style={styles.param}>Theme: {theme}</Text>
      )}
      {userId && (
        <Text style={styles.param}>User ID: {userId}</Text>
      )}

      <CustomButton title="Go Next" onPress={goNext} fullWidth />
      <CustomButton title="Go Back" onPress={goBack} fullWidth />
      {/* <CustomButton title="Reset to Home" onPress={resetToHome} fullWidth type="secondary" /> */}
    </View>
  );
}

