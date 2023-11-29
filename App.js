import React, { useState } from 'react';
import { StatusBar, TextInput, Button, Text, View, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  const [cuenta, setCuenta] = useState('');
  const [personas, setPersonas] = useState(1);
  const [porcentajePropina, setPorcentajePropina] = useState(10);
  const [totalPropina, setTotalPropina] = useState(0);
  const [totalCuenta, setTotalCuenta] = useState(0);
  const [totalPorPersona, setTotalPorPersona] = useState(0);

  const calcularPropina = () => {
    const cuentaFloat = parseFloat(cuenta);
    const propina = (cuentaFloat * porcentajePropina) / 100;
    const total = cuentaFloat + propina;
    const totalPorPersona = total / personas;

    setTotalPropina(propina);
    setTotalCuenta(total);
    setTotalPorPersona(totalPorPersona);
  };

  const irAPantallaDePago = () => {
    navigation.navigate('PantallaDePago', {
      totalPropina,
      totalCuenta,
      totalPorPersona,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propina</Text>

      <TextInput
        style={styles.input}
        placeholder="Importe de la cuenta"
        keyboardType="numeric"
        value={cuenta}
        onChangeText={(text) => setCuenta(text)}
      />

      <View style={styles.rowContainer}>
        <Text style={styles.label}>Personas: {personas}</Text>
        <Button title="+" onPress={() => setPersonas(personas + 1)} />
        <Button title="-" onPress={() => setPersonas(Math.max(personas - 1, 1))} />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.label}>Porcentaje de propina: {porcentajePropina}%</Text>
        <Button title="10%" onPress={() => setPorcentajePropina(10)} />
        <Button title="12.5%" onPress={() => setPorcentajePropina(12.5)} />
        <Button title="15%" onPress={() => setPorcentajePropina(15)} />
        <Button title="20%" onPress={() => setPorcentajePropina(20)} />
      </View>

      <Button title="Calcular Propina" onPress={calcularPropina} />

      <View style={styles.resultadosContainer}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Importe de propina:</Text>
          <Text style={styles.resultado}>${totalPropina.toFixed(2)}</Text>
        </View>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Importe total:</Text>
          <Text style={styles.resultado}>${totalCuenta.toFixed(2)}</Text>
        </View>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoLabel}>Importe por persona:</Text>
          <Text style={styles.resultado}>${totalPorPersona.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.pagarButton} onPress={irAPantallaDePago}>
        <Text style={styles.pagarButtonText}>Pagar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: '#fff',
    color: '#333',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    marginRight: 10,
    color: '#fff',
  },
  resultadosContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  resultadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  resultadoLabel: {
    color: '#fff',
  },
  resultado: {
    color: '#fff',
  },
  pagarButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  pagarButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
};
