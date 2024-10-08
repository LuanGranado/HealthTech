import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.logo}>HEALTHTECH</Text>
        <Text style={styles.subLogo}>Clínica</Text>
        <Text style={styles.welcome}>Boas-vindas!</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite a especialidade"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua localização"
          placeholderTextColor="#999"
        />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.testimonial}>
            <Text style={styles.testimonialText}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </Text>
            <Text style={styles.testimonialAuthor}>Júlio, 40 anos, São Paulo/SP</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  subLogo: {
    fontSize: 18,
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  testimonial: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  testimonialText: {
    fontSize: 14,
    marginBottom: 5,
  },
  testimonialAuthor: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});
