import CustomButton from '@/components/CustomButton';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import screensPath from '@/app/screensPath';
import NavigationService from '@/app/services/navigationServices';

export default function HomeScreen() {

  // const navigateToProfile = () => {
  //   NavigationService.navigate(screensPath.profile, { userId: '123', userName: 'John Doe' });
  // };

  // const navigateToSettings = () => {
  //   NavigationService.navigate(screensPath.settings);
  // };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        {/* <ThemedText type="subtitle">Navigations</ThemedText> */}
        {/* <CustomButton title="Go to Profile (with params)" onPress={navigateToProfile} fullWidth /> */}
        {/* <CustomButton title="Go to Settings" onPress={navigateToSettings} fullWidth type="secondary" /> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
