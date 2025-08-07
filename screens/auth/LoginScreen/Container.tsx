
import LoginScreen from './View';
import  screensPath from '@/app/screensPath';
import NavigationService from '@/app/services/navigationServices';
import { styles } from './styles';
import { authAction } from '@/store/sagas/actions/auth.actions';
import { useDispatch } from 'react-redux';
import { loginRequestRT } from '@/store/features/authSlice';

export default function Container(props:any) {

  const dispatch = useDispatch();

  const url = 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'

  const handleLogin = () => {
    const data = {
      "username": "emilys",
      "password": "emilyspass",
      "expiresInMins": 30
    }
    dispatch(loginRequestRT(data))
    dispatch(authAction.loginRequest(data));
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