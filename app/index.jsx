import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcome}>Boas-vindas!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite a especialidade" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Digite sua localização" 
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      
      <Text style={styles.testimonialsTitle}>Depoimentos</Text>
      <View style={styles.testimonial}>
        <Text>Júlio, 40 anos, São Paulo/SP.</Text>
        <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</Text>
      </View>
      <View style={styles.testimonial}>
        <Text>Júlio, 40 anos, São Paulo/SP.</Text>
        <Text>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</Text>
      </View>
      <View style={styles.testimonial}>
        <Text>Júlio, 40 anos, São Paulo/SP.</Text>
        <Text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</Text>
      </View>
      
      <Link href="/login">Login</Link>
      <Link href="/cadastro">Cadastro</Link>
      <Link href="/profile">Profile</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
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
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  testimonialsTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  testimonial: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
});


