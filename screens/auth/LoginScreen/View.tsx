
import CustomButton from '@/components/CustomButton';
import CustomTextInput from '@/components/CustomTextInput';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { LoginScreenProps } from '@/screens/auth/auth';
import { useColorScheme } from 'react-native'
import React, { useState } from 'react'

export default function LoginScreen({
  handleLogin,
  handleForgotPassword,
  handleSignUp,
  imageurl
}: LoginScreenProps) {

  const [email, setEmail] = useState('pranavonkar@bitcot.com');
  const [password, setPassword] = useState('Pranav@123');
  const colorScheme = useColorScheme() ?? 'light';

  const headerImage = (
    <Image
        source={{ uri: imageurl }}
        style={styles.headerImage}
        resizeMode="cover"
     />
  );
  
  return (
    <ParallaxScrollView
      headerImage={headerImage}
      
      headerBackgroundColor={{
        light: '#f2f2f2',
        dark: '#1c1c1e',
      }}>

      <CustomTextInput
        label="Email"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <CustomTextInput
        label="Password"
        type="password"
        required
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton
        title="Login"
        onPress={handleLogin}
        fullWidth
        style={{ marginTop: 16 }}
      />

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

