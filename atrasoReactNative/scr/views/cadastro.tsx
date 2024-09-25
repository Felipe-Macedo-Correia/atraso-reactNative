import React, { useState } from 'react';
import { View, Image, Text, ImageBackground, ScrollView, TextInput, Alert } from 'react-native';
import Imagens from "../../img/img";
import styles from '../css/cadastroCss';
import { Button } from "../../components/Button/Button"; 

const CadastroScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [nome, setNomeAluno] = useState('');
    const [rm, setRmAluno] = useState('');
    const [curso, setCursoAluno] = useState('');        
    const [periodo, setPeriodoAluno] = useState('');
    const [modulo, setModuloAluno] = useState('');
    const [password, setPassword] = useState('');

    const verificar = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/alunos', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    rm,
                    password,
                    curso,
                    periodo,
                    modulo,
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erro ${response.status}: ${errorData.error}`);
            }
            const result = await response.json();
            console.log('Resultado da criação:', result); // Log para depuração
    
            Alert.alert('Success', 'Dados salvos com sucesso!');
            navigation.navigate('login'); // Navega para a tela 'login'
        } catch (error) {
            Alert.alert('Error', 'Ocorreu um erro ao salvar os dados.');
            console.error('Error:', error);
        }
    };

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
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome...'
                    placeholderTextColor='black'
                    autoFocus={true}
                    returnKeyType='done'
                    onChangeText={text => setNomeAluno(text)}
                />

                <View style={styles.margin}></View>

                <Text style={styles.titulo}> RM:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu RM...'
                    placeholderTextColor='black'
                    keyboardType="numeric"
                    returnKeyType='done'
                    maxLength={5}
                    onChangeText={text => setRmAluno(text)}
                />

                <View style={styles.margin}></View>

                <Text style={styles.titulo}> Curso:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu curso...'
                    placeholderTextColor='black'
                    returnKeyType='done'
                    onChangeText={text => setCursoAluno(text)}
                />

                <View style={styles.margin}></View>

                <Text style={styles.titulo}> Período:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o período...'
                    placeholderTextColor='black'
                    returnKeyType='done'
                    onChangeText={text => setPeriodoAluno(text)}
                />

                <View style={styles.margin}></View>

                <Text style={styles.titulo}> Módulo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o módulo...'
                    placeholderTextColor='black'
                    returnKeyType='done'
                    onChangeText={text => setModuloAluno(text)}
                />

                <View style={styles.margin}></View>

                <Text style={styles.titulo}> Digite uma senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite uma senha...'
                    placeholderTextColor='black'
                    secureTextEntry
                    returnKeyType='done'
                    onChangeText={text => setPassword(text)}
                />

                <View style={styles.container}>   
                    <Button
                        style={[styles.buttonCad, { backgroundColor: '#b51515' }]} // Defina a cor de fundo desejada aqui
                        color='#b51515'
                        variant="primary"
                        title="Enviar" 
                        onPress={verificar} // Chama a função verificar
                    />
                </View>          
    
            </ScrollView>
        </ImageBackground>
    );
};

export default CadastroScreen;
