import Imagens from "../../img/img";
import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import styles from "../css/homeCss";

const HomeScreen: React.FC<{ navigation: any }> = ({navigation}) =>{
  return (
    <ImageBackground
    source={Imagens.fundoPerfil}
    style={styles.background}
    resizeMode="cover"
  >


  </ImageBackground>
  );
};

export default HomeScreen;
