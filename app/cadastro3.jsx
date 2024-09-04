import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function Cadastro3() {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const togglePlan = (plan) => {
    setSelectedPlans((prev) =>
      prev.includes(plan) ? prev.filter((p) => p !== plan) : [...prev, plan]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Para finalizar, qual seu plano de saúde?</Text>
      <Text style={styles.subtitle}>Selecione os planos:</Text>
      {['Sulamerica', 'Unimed', 'Bradesco', 'Amil', 'Biosaúde', 'Biovida', 'Outros', 'Não tenho plano'].map((plan) => (
        <TouchableOpacity key={plan} onPress={() => togglePlan(plan)} style={styles.checkboxContainer}>
          <View style={styles.checkbox}>
            {selectedPlans.includes(plan) && <View style={styles.checkboxInner} />}
          </View>
          <Text style={styles.planText}>{plan}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <Link href="/cadastro2" asChild style={styles.buttonSecondary}>
          <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
            <Text style={styles.buttonTextSecondary}>Voltar</Text>
          </TouchableOpacity>
        </Link>
          <TouchableOpacity style={styles.button}>
        <Link href="/" asChild>
            <Text style={styles.buttonText}>Cadastrar!</Text>
        </Link>
          </TouchableOpacity>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007BFF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#007BFF',
  },
  planText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: '#7ACEAA',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    marginBottom: 10,
    margin: 'auto',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
