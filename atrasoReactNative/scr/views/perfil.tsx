import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../css/perfilCss';
import Imagens from "../../img/img";
import Entypo from '@expo/vector-icons/Entypo';

const Desenvolvedores = () => (
    <ImageBackground
    source={Imagens.fundoPerfil}
    style={styles.background}
    resizeMode="cover"
  >
  
        <View style={styles.container}>
            <Image source={Imagens.perfil} style={styles.imgPerfil} />
    
          <View style={styles.cameraIcon}>
            <TouchableOpacity >
              <Entypo name="camera" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
            <Text style={styles.nome}> Clodoaldo Oliveira </Text>
            <Text> Clodo@gmail.com </Text>
        </View>

        <View style={styles.containerBase}>
        <Image source={Imagens.iconCurso} style={styles.imgIcon} />
        <Text style={styles.nomeAvaliador}>Desenvolvimento de Sistemas </Text>
        <Text style={styles.modulo}> 2 Módulo - Manhã </Text>
        </View>


        <View style={styles.containerBase}>
        <Image source={Imagens.iconRm} style={styles.imgIcon2} />
        <Text style={styles.nomeAvaliador}> 25634</Text>
        </View>



        
  </ImageBackground>
);


export default Desenvolvedores;
