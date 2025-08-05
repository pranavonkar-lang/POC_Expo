import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerImage: {
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 18,
    },
    input: {
      height: 48,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      fontSize: 16,
      backgroundColor: '#fff',
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      marginTop: 8,
      marginBottom: 16,
    },
    forgotPasswordText: {
      color: '#007AFF',
      fontSize: 14,
      fontWeight: '500',
    },
    signUpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 24,
    },
    signUpText: {
      color: '#666',
      fontSize: 14,
    },
    signUpLink: {
      color: '#007AFF',
      fontSize: 14,
      fontWeight: '600',
    },
  });