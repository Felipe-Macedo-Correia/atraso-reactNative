import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import Imagens from "../../img/img";
import styles from '../css/cadastroCss';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button } from "../../components/Button/Button"; 
//import { useUser } from '../cliContext';


const CadastroScren: React.FC<{ navigation: any }> = ({navigation}) => {
    const [nomeAluno, setNomeAluno] = useState('');
    const [rmAluno, setRmAluno] = useState('');
    const [cursoAluno, setCursoAluno] = useState('');
    const [periodoAluno, setPeriodoAluno] = useState('');
    const [moduloAluno, setModuloAluno] = useState('');
    const [password, setPassword] = useState('');
  

/*
    // Desestruturando corretamente
    const { userId, setUserId, setUserData } = useUser();

    const verificar = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/alunos', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nomeAluno,
                    rmAluno,
                    password,
                    cursoAluno,
                    periodoAluno,
                    moduloAluno,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro ${response.status}: ${errorData.error}`);
            }
    
            const result = await response.json();
            console.log('Resultado da criação:', result); // Log para depuração
    
            const idCli = result.data.idContratante; // Acesse idContratante dentro de data
    
            if (idCli) {
                setUserId(idCli); // Armazena o ID do usuário no contexto
                console.log('Chamando fetchDadosCli com ID:', idCli); // Para depuração
                await fetchDadosCli(idCli);
            } else {
                console.error('ID do contratante não foi retornado. Resposta:', result);
            }
    
            Alert.alert('Success', 'Dados salvos com sucesso!');
            navigation.navigate('login'); // Navega para a tela 'login'
        } catch (error) {
            Alert.alert('Error', 'Ocorreu um erro ao salvar os dados.');
            console.error('Error:', error);
        }
    };
        
    
    
    const fetchDadosCli = async (idCli) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/cli/${idCli}`); // Chamada à API com o ID do usuário
            const data = await response.json();
    
            if (response.ok) {
                setUserData(data); // Armazena os dados do usuário no contexto
            } else {
                console.error('Error fetching user data:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };  
*/
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


