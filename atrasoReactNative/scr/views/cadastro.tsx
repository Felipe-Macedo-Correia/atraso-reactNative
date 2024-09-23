import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import Imagens from "../../img/img";
import styles from '../css/cadastroCss';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button } from "../../components/Button/Button"; 



const CadastroScren: React.FC<{ navigation: any }> = ({navigation}) => {
    const [nomeAluno, setNomeAluno] = useState('');
    const [rmAluno, setRmAluno] = useState('');
    const [cursoAluno, setCursoAluno] = useState('');
    const [periodoAluno, setPeriodoAluno] = useState('');
    const [moduloAluno, setModuloAluno] = useState('');
    const [password, setPassword] = useState('');
  


    return (
        <ImageBackground
        source={Imagens.fundoBranco}
        style={styles.background}
        resizeMode="cover"
      >
         <ScrollView>
        <View style={styles.container}>
            <Image source={Imagens.logo} style={styles.help} />
        </View>
       
        
        <Text style={styles.titulo}> Nome:</Text>
        <TextInput style={styles.input}
        placeholder='Digite seu nome...'
        placeholderTextColor='black'
        autoFocus={true}
        returnKeyType='done'
        onChangeText = {text => setNomeAluno(text)}>
        </TextInput>
          

        <View style={styles.margin}></View>

        <Text style={styles.titulo}> RM:</Text>
        <TextInput style={styles.input}
        placeholder='Digite seu RM...'
        placeholderTextColor='black'
        autoFocus={true}
        keyboardType="numeric"
        returnKeyType='done'
        maxLength={5}
        onChangeText = {text => setRmAluno(text)}>
        </TextInput>

        
        <View style={styles.margin}></View>

        <Text style={styles.titulo}> Curso:</Text>
        <TextInput style={styles.input}
        placeholder='Digite seu curso...'
        placeholderTextColor='black'
        autoFocus={true}
        returnKeyType='done'
        onChangeText = {text => setCursoAluno(text)}>
        </TextInput>

        
        <View style={styles.margin}></View>

        <Text style={styles.titulo}> Período:</Text>
        <TextInput style={styles.input}
        placeholder='Digite o período...'
        placeholderTextColor='black'
        returnKeyType='done'
        autoFocus={true}
        onChangeText = {text => setPeriodoAluno(text)}>
        </TextInput>

        <View style={styles.margin}></View>

        <Text style={styles.titulo}> Módulo:</Text>
        <TextInput style={styles.input}
        placeholder='Digite o módulo...'
        placeholderTextColor='black'
        autoFocus={true}
        returnKeyType='done'
        onChangeText = {text => setModuloAluno(text)}>
        </TextInput>

        <View style={styles.margin}></View>

        <Text style={styles.titulo}> Digite uma senha:</Text>
        <TextInput style={styles.input}
        placeholder='Digite uma senha...'
        placeholderTextColor='black'
        autoFocus={true}
        returnKeyType='done'
        onChangeText = {text => setPassword(text)}>
        </TextInput>

       

        <View style={styles.container}>   
        <Button
                style={[styles.buttonCad, { backgroundColor: '#b51515' }]} // Defina a cor de fundo desejada aqui
                color='#b51515'
                variant="primary"
                title="Enviar" 
                onPress={() => navigation.navigate('cadastro')} 
                />
        </View>          
    
        </ScrollView>
                    
        
        </ImageBackground>
    );
};
export default CadastroScren;


