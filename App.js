import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import Checkbox from './components/Checkbox';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';

// Telas
function Tela_Principal({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Logo view */}
      <View style={{ flex: 0.85, marginTop: 180, alignItems: 'center' }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={{ fontSize: 32, color: 'black' }}>ezProtocol</Text>
      </View>

      {/* Button view */}
      <View style={{ flex: 0.15 }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log('Navegando para a tela "Solicitar Exames"...');
            navigation.navigate('Solicitar Exames');
          }}>
          <Text style={styles.buttonText}>Solicitar Exames</Text>
        </Pressable>
      </View>
    </View>
  );
}
function Tela_SolicitarExames({ navigation }) {
  const [genero, setGenero] = useState(); // Armazena o valor do Picker "Gênero"
  const handleValueChange = (itemValue, itemIndex) => setGenero(itemValue); // Altera o valor do Picker "Gênero"
  const diseases = [
    { id: 'Cardiopatia hipertensiva' },
    { id: 'Diabetes mellitus' },
    { id: 'Arritmias cardíacas' },
    { id: 'Insuficiência cardíaca' },
    { id: 'Síndrome coronariana' },
    { id: 'Valvopatias' },
    { id: 'Miocardiopatias' },
    { id: 'Cardiopatias congênitas' },
    { id: 'Cirrose hepática' },
    { id: 'HIV' },
    { id: 'Obesidade mórbida' },
    { id: 'Anemia falciforme' },
    { id: 'Doença renal crônica' },
    { id: 'Doença cerebrovascular' },
    { id: '	Hipertensão arterial resistente' },
  ];
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} hidden={false} />

      {/* Título */}
      <View
        style={{
          flex: 0.08,
          width: '100%',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: '#a2a2a2',
        }}>
        <Text style={{ fontSize: 20, marginTop: 18 }}>
          Informações do Paciente
        </Text>
      </View>

      {/* Campos */}
      <View
        style={{
          flex: 0.92,
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ScrollView style={{ width: '100%' }}>
          {/* Idade */}
          <View>
            <Text style={{ marginLeft: 12, marginTop: 18 }}>Idade</Text>
            <TextInput
              style={styles.input}
              placeholder="18"
              inputMode="numeric"
            />
          </View>

          {/* Gênero */}
          <View>
            <Text style={{ marginLeft: 12, marginTop: 18 }}>Gênero</Text>
            <Picker
              style={{
                marginLeft: 12,
                marginTop: 12,
                width: '93%',
                borderColor: 'black',
              }}
              selectedValue={genero}
              onValueChange={handleValueChange}
              mode="dropdown">
              <Picker.Item label="Masculino" value="m" />
              <Picker.Item label="Feminino" value="f" />
            </Picker>
          </View>

          {/* Doenças */}
          <View>
            <Text style={{ marginLeft: 12, marginTop: 18 }}>Doenças</Text>
            <ScrollView style={{ width: '90%', height: 200, marginTop: 12 }}>
              <Checkbox
                id="diseases"
                options={diseases}
                selected={selectedDiseases}
                setSelected={setSelectedDiseases}
                multiple
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

// Navegação
export default function App() {
  const Stack = createNativeStackNavigator(); // Controla a navegação entre telas
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela Principal" component={Tela_Principal}/>
        <Stack.Screen
          name="Solicitar Exames"
          component={Tela_SolicitarExames}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  button: {
    backgroundColor: '#666666',
    width: 180,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
  },

  input: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
});
