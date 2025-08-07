import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, useColorScheme } from 'react-native';
import { useAppSelector, useAppDispatch } from '@/store/common/hooks';
// import { loginFailure } from '@/store/features/authSlice';

const CustomLoader = () => {
    
  const isLoading = useAppSelector((state) => state.auth.loading);
  const colorScheme = useColorScheme();
  // const dispatch = useAppDispatch();

  // useEffect(()=>{
  //   console.log('TT01', isLoading)
  //   dispatch(loginFailure(''))
  // },[])

  if (!isLoading) return null;

  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#00000099' : '#ffffff99' }]}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});
