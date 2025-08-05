
import LoginScreen from './View';
import  screensPath from '@/app/screensPath';
import NavigationService from '@/app/services/navigationServices';
import { styles } from './styles';

export default function Container(props:any) {

  const url = 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'

  const handleLogin = () => {
    NavigationService.replace(screensPath.tabs);
  };

  const handleForgotPassword = () => {
    NavigationService.navigate('/forgot-password');
  };

  const handleSignUp = () => {
    NavigationService.navigate('/signup');
  };

  return (
    <LoginScreen
      handleLogin={handleLogin}
      handleForgotPassword={handleForgotPassword}
      handleSignUp={handleSignUp}
      imageurl={url}
    />
  )
}