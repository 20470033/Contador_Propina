
import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';

const PreferencesScreen = () => {
  const [nombre, setNombre] = useState('');
  const [soloWifi, setSoloWifi] = useState(false);

  const guardarPreferencias = () => {
    
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Preferencias del usuario</Text>

      <Text>Nombre a mostrar:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text>Solo WIFI?</Text>
      <Switch value={soloWifi} onValueChange={(value) => setSoloWifi(value)} />

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, marginTop: 20, borderRadius: 8 }} onPress={guardarPreferencias}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PreferencesScreen;

