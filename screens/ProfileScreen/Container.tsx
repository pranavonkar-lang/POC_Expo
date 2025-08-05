import screensPath from '@/app/screensPath';
import NavigationService from '@/app/services/navigationServices';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ProfileData } from '@/types/profile';
import React, { useState } from 'react';
import ProfileScreen from './View';

export default function ProfileContainer() {
  const colorScheme = useColorScheme() ?? 'light';
  
  const [profileData, setProfileData] = useState<ProfileData>({
    id: '1',
    email: 'pranav@com.com',
    firstName: 'Pranav',
    lastName: 'Onkar',
    bio: 'Software Developer passionate about creating amazing user experiences.',
    phone: '8827171605',
    location: 'San Francisco, CA',
    website: 'https://pranav.dev',
  });

  const handleEditProfile = () => {
    NavigationService.navigate('/edit-profile', { profileData });
  };

  const handleLogout = () => {
    NavigationService.replace(screensPath.login);
  };

  const handleBack = () => {
    NavigationService.back();
  };

  const handleSettings = () => {
    NavigationService.navigate('/settings');
  };

  return (
    <ProfileScreen
      profileData={profileData}
      setProfileData={setProfileData}
      handleEditProfile={handleEditProfile}
      handleLogout={handleLogout}
      handleBack={handleBack}
      handleSettings={handleSettings}
      colorScheme={colorScheme}
      imageurl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
      title="My Profile"
      subtitle="Manage your account information"
    />
  );
} 