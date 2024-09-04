import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira alguns dados básicos:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome completo" 
      />
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
      <TextInput 
        style={styles.input} 
        placeholder="Repita sua senha" 
        secureTextEntry 
      />
      <Link href="/cadastro2" style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </Link>
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
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


