import CustomButton from '@/components/CustomButton';
import {
    ProfileScreenProps,
    ProfileValidationErrors
} from '@/types/profile';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export default function ProfileScreen(props: ProfileScreenProps) {
  
  const {
    profileData,
    handleEditProfile,
    handleLogout,
    handleSettings,
    handleBack,
    colorScheme,
    imageurl,
    title = "Profile",
    subtitle,
  } = props;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      
      <View style={styles.profileHeader}>
        {profileData.avatar ? (
          <Image source={{ uri: profileData.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {profileData.firstName?.[0]}{profileData.lastName?.[0]}
            </Text>
          </View>
        )}
        
        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {profileData.firstName} {profileData.lastName}
          </Text>
          <Text style={styles.email}>{profileData.email}</Text>
          {profileData.bio && <Text style={styles.bio}>{profileData.bio}</Text>}
        </View>
      </View>

      <View style={styles.detailsContainer}>
        {profileData.phone && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phone:</Text>
            <Text style={styles.detailValue}>{profileData.phone}</Text>
          </View>
        )}
        
        {profileData.location && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>{profileData.location}</Text>
          </View>
        )}
        
        {profileData.website && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Website:</Text>
            <Text style={styles.detailValue}>{profileData.website}</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>

          <CustomButton 
            title="Go Back" 
            onPress={handleBack} 
            fullWidth 
            type="secondary"
          />
        
          <CustomButton 
            title="Edit Profile" 
            onPress={handleEditProfile} 
            fullWidth 
            style={{ marginTop: 8 }}
          />

          <CustomButton 
            title="Settings" 
            onPress={handleSettings} 
            fullWidth 
            type="secondary"
            style={{ marginTop: 8 }}
          />
        
          <CustomButton 
            title="Logout" 
            onPress={handleLogout} 
            fullWidth 
            type="outline"
            style={{ marginTop: 16 }}
          />

      </View>
    </View>
  );
}

