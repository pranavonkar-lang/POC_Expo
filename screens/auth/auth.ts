export interface UserData {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  token?: string;
  refreshToken?: string;
}

export interface LoginFormData {
  email?: string;
  username?: string;
  password: string;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormData {
  email: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  general?: string;
}

export interface LoginScreenProps {
  // email: string;
  // password: string;
  // setEmail: (email: string) => void;
  // setPassword: (password: string) => void;
  handleLogin: ({username, password}:LoginFormData) => void;
  handleForgotPassword: () => void;
  handleSignUp: () => void;
  // colorScheme: 'light' | 'dark';
  imageurl: string;
}

export interface SignUpScreenProps {

  formData: SignUpFormData;
  setFormData: (data: SignUpFormData) => void;
  
  handleSignUp: () => void;
  handleBackToLogin: () => void;
  
  colorScheme: 'light' | 'dark';
  imageurl?: string;
  
  title?: string;
  subtitle?: string;
  
  validateOnSubmit?: boolean;

  onSignUpSuccess?: (userData: UserData) => void;
  onSignUpFailure?: (error: string) => void;
  
  isLoading?: boolean;
}

export interface ForgotPasswordScreenProps {
  email: string;
  setEmail: (email: string) => void;
  
  handleResetPassword: () => void;
  handleBackToLogin: () => void;
  

  colorScheme: 'light' | 'dark';
  imageurl?: string;
  
  title?: string;
  subtitle?: string;
  
  onResetSuccess?: (message: string) => void;
  onResetFailure?: (error: string) => void;
  
  isLoading?: boolean;
}


export interface AuthNavigationParams {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
}

