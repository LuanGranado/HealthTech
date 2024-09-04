import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça login em sua conta</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu endereço de email" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Insira sua senha" 
        secureTextEntry 
      />
      <Link href="/" style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Link>
      <Text style={styles.link}>Esqueceu sua senha?</Text>
      <Link href="/cadastro" style={styles.link}>Ainda não tem conta? Faça seu cadastro!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  },
  title: {
      fontSize: 20,
      marginBottom: 20,
  },
  input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
  },
  button: {
      backgroundColor: '#0B3B60',
      padding: 10,
      fontSize: 16,
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
  link: {
      color: '#007BFF',
      marginTop: 10,
  },
});
