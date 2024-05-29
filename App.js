import Checkbox from './components/Checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  View,
  Modal,
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
  const conditions = [
    { key: 1, text: 'Tabagismo', asa: 1 },
    { key: 2, text: 'Gestação', asa: 1 },
    { key: 3, text: 'Obesidade', asa: 2 },
    { key: 4, text: 'Obesidade Mórbida', asa: 3 },
    { key: 5, text: 'Marcapasso Implantado', asa: 2 },
    { key: 6, text: 'Endocrinopatia', asa: 2 },
    { key: 7, text: 'Alcoolismo Social', asa: 4 },
    { key: 8, text: 'Dependência Alcoólica', asa: 5 },
  ];
  const [selectedCondition, setSelectedCondition] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentAsa, setCurrentAsa] = useState(false);
  function checkAsa(asaList) {   
    console.log(asaList)
    if (asaList[0].asa == 1) {
      setCurrentAsa('ASA I');
    } else if (asaList[0].asa == 2) {
      setCurrentAsa('ASA II');
    } else if (asaList[0].asa == 3) {
      setCurrentAsa('ASA III');
    } else if (asaList[0].asa == 4) {
      setCurrentAsa('ASA IV');
    } else if (asaList[0].asa == 5) {
      setCurrentAsa('ASA V');
    }
  }
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
            <Text style={styles.fieldTitle}>Idade</Text>
            <TextInput
              style={styles.input}
              placeholder="18"
              inputMode="numeric"
            />
          </View>

          {/* Gênero */}
          <View>
            <Text style={styles.fieldTitle}>Gênero</Text>
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

          {/* Características/Condições */}
          <View>
            <Text style={styles.fieldTitle}>Características/Condições</Text>
            <ScrollView style={{ width: '90%', height: 200, marginTop: 12 }}>
              <Checkbox
                id="conditions"
                options={conditions}
                selected={selectedCondition}
                setSelected={setSelectedCondition}
                multiple
                checkAsa={checkAsa}
              />
            </ScrollView>
          </View>

          {/* Classificação ASA */}
          <View>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.fieldTitle}>Classificação ASA</Text>

              {/* Pop-up informativo das classificações ASA */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {                  
                  console.log('Fechando informativo sobre as classificações ASA...');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                      <Icon name="close-circle" color={'#c0c0c0'} size={30} style={{marginTop: 10, marginRight: 10}} onPress={() => {
                        console.log('Fechando informativo sobre as classificações ASA...');
                        setModalVisible(!modalVisible)
                      }}/>
                    </View>
                    <ScrollView style={{ width: '90%', height: 350, marginVertical: 20}}>
                      
                      {/* ASA I */}
                      <Text style={styles.asaTitle}>ASA I</Text>
                      <Text style={styles.asaText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                      
                      {/* ASA I */}
                      <Text style={styles.asaTitle}>ASA I</Text>
                      <Text style={styles.asaText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                      
                      {/* ASA I */}
                      <Text style={styles.asaTitle}>ASA I</Text>
                      <Text style={styles.asaText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                      
                      {/* ASA I */}
                      <Text style={styles.asaTitle}>ASA I</Text>
                      <Text style={styles.asaText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

                    </ScrollView>
                  </View>
                </View>
              </Modal>
              <Pressable
                onPress={() => {
                  console.log('Exibindo informativo sobre as classificações ASA...');
                  setModalVisible(true)
                }}>
                <Icon name="help-circle" style={{ marginLeft: 5, marginTop: 19 }} color={'#c0c0c0'} size={20}/>
              </Pressable>
            </View>
            <Text style={{ marginLeft: 12, borderWidth: 1, borderRadius: 10, padding: 10, fontSize: 18, marginTop: 12, alignSelf: 'flex-start' }}>{currentAsa}</Text>
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
        <Stack.Screen name="Solicitar Exames" component={Tela_SolicitarExames}/>
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
    borderRadius: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  asaTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8
  },

  asaText: {
    textAlign: 'justify'
  },

  fieldTitle: {
    marginLeft: 12,
    marginTop: 18,
    fontSize: 15,
    fontWeight: 'bold'
  },
});
