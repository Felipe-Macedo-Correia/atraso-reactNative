import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import Scanner from "../../components/Scanner/Scanner"; // ajuste o caminho se necessário
import styles from "../css/homeCss";
import Imagens from "../../img/img"

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground
      source={Imagens.fundoHome}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}> 
       
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('DesenvolvedoresScreen')}
        />


        <View style={styles.scanner}>

          <Text style={styles.titulo}>Leia seu Qrcode</Text>

          <View style={styles.conteudoScanner}>
        <Scanner />
        </View>
      
        </View>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
