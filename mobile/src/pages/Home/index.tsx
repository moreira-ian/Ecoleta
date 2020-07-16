import React, {useState} from 'react';
import { View, ImageBackground, Image, Text, KeyboardAvoidingView, Platform } from 'react-native';

import { RectButton, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState ('');
  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/home-background.png')}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput style={styles.input} placeholder="UF" 
          maxLength={2}
          autoCapitalize="characters"
          autoCorrect={false}
          value={uf} 
          onChangeText={setUf}
        />

          <TextInput style={styles.input} placeholder="Cidade" 
          value={city} 
          onChangeText={setCity} 
          autoCorrect={false}
        />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Feather name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
//export
export default Home;