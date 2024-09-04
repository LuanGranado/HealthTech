import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cadastro2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agora, mais alguns dados sobre você:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu CEP" 
        keyboardType="numeric" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu endereço" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu número" 
        keyboardType="numeric" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Insira seu complemento" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="(00) 00000-0000" 
        keyboardType="phone-pad" 
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <Link href="/cadastro3" style={styles.button}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Link>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
