// Profile Types
export interface ProfileData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  phone?: string;
  dateOfBirth?: string;
  location?: string;
  website?: string;
}

// Profile Form Data Types
export interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  phone: string;
  location: string;
  website: string;
}

// Profile Validation Errors
export interface ProfileValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  general?: string;
}

// ProfileScreen Props
export interface ProfileScreenProps {
  // Profile data props
  profileData: ProfileData;
  setProfileData: (data: ProfileData) => void;
  goNext: () => void;
  // Handler functions
  handleEditProfile: () => void;
  handleLogout: () => void;
  handleBack: () => void;
  handleSettings: () => void;
  
  // UI/Theme props
  colorScheme: 'light' | 'dark';
  imageurl?: string;
  
  // Optional customization props
  title?: string;
  subtitle?: string;
  showEditButton?: boolean;
  showLogoutButton?: boolean;
  showBackButton?: boolean;
  showSettingsButton?: boolean;
  
  // Validation props
  validateOnSubmit?: boolean;
  
  // Callback props
  onProfileUpdate?: (profileData: ProfileData) => void;
  onProfileUpdateFailure?: (error: string) => void;
  onLogout?: () => void;
  onBack?: () => void;
  onSettings?: () => void;
  
  // Feature flags
  isLoading?: boolean;
  isEditing?: boolean;
  allowEdit?: boolean;
}

// EditProfileScreen Props
export interface EditProfileScreenProps {
  // Form data props
  formData: ProfileFormData;
  setFormData: (data: ProfileFormData) => void;
  
  // Handler functions
  handleSaveProfile: () => void;
  handleCancel: () => void;
  handleDeleteAccount: () => void;
  
  // UI/Theme props
  colorScheme: 'light' | 'dark';
  imageurl?: string;
  
  // Optional customization props
  title?: string;
  subtitle?: string;
  
  // Validation props
  validateOnSubmit?: boolean;
  
  // Callback props
  onSaveSuccess?: (profileData: ProfileData) => void;
  onSaveFailure?: (error: string) => void;
  onDeleteAccount?: () => void;
  
  // Feature flags
  isLoading?: boolean;
  showDeleteAccount?: boolean;
}

// Profile Navigation Params
export interface ProfileNavigationParams {
  Profile: { userId?: string; userName?: string };
  EditProfile: { profileData: ProfileData };
  ProfileSettings: undefined;
}

// Profile API Response Types
export interface ProfileResponse {
  success: boolean;
  profile?: ProfileData;
  error?: string;
}

export interface UpdateProfileResponse {
  success: boolean;
  profile?: ProfileData;
  error?: string;
}

// Profile State Types
export interface ProfileState {
  profile: ProfileData | null;
  isLoading: boolean;
  error: string | null;
  isEditing: boolean;
}

// Profile Actions Types
export interface ProfileActions {
  fetchProfile: (userId: string) => Promise<void>;
  updateProfile: (profileData: ProfileData) => Promise<void>;
  deleteProfile: (userId: string) => Promise<void>;
  resetProfile: () => void;
} 