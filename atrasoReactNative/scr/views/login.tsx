import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import Imagens from "../../img/img";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Button } from "../../components/Button/Button"; // Verifique se o caminho está correto
import styles from '../css/loginCss';
import axios from 'axios';


const Login: React.FC<{ navigation: any }> = ({navigation}) => {
    const [rmAluno, setRmAluno] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [message, setMessage]= useState ('')
    const [senha, setSenha] = useState('');

   // Defina a função handleLoginPress para campos obrigatórios

    const handleLogin = async () => {
     if (!rmAluno || !password) {
        setMessage('Preencha todos os campos');
         return;
     }
     console.log("RM:", rmAluno);
     console.log("Password:", password);
     try {
         const response = await axios.post('http://localhost:8000/api/auth', {
            setRmAluno:setRmAluno,
             password:password,
         });

        console.log("Resposta da API:", response.data);

         if (response.data && response.data.status === 'Sucesso') {
             navigation.navigate('homeStack', { screen: 'home' });
         } else {
             setMessage('Credenciais incorretas, tente novamente.');
         }

   } catch (error) {
         console.error('Erro ao fazer login:', error);
         setMessage('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
     }
    }
    
    return (
        <ImageBackground
        source={Imagens.fundoBranco}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
            <Image source={Imagens.logo} style={styles.help} />

            <View style={styles.input}>
                <FloatingLabelInput
                    label="RM"
                    value={rmAluno}
                    staticLabel
                    hintTextColor={'#aaa'}
                    hint="exemple@exemple.com"
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        borderColor: '#dd2726',
                        borderRadius: 50,
                        borderTopWidth: 5,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderBottomWidth: 5,
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                    }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                    onChangeText={setRmAluno}
                />
                     <Text style={styles.errorMessage}>{message}</Text> 

            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Senha"
                    isPassword
                    staticLabel
                    togglePassword={show}
                    value={password}
                    onChangeText={setPassword}
                    customShowPasswordComponent={<Text>Mostrar</Text>}
                    customHidePasswordComponent={<Text>Esconder</Text>}
                    containerStyles={{
                        borderWidth: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        borderColor: '#dd2726',
                        borderRadius: 50,
                        borderTopWidth: 5,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderBottomWidth: 5,
                    }}
                    customLabelStyles={{
                        colorFocused: '#FF8F49',
                        fontSizeFocused: 12,
                    }}
                    labelStyles={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 5,
                        color: '#FF8F49',
                    }}
                    inputStyles={{
                        color: '#000',
                        paddingHorizontal: 10,
                    }}
                />
            </View>

            <Button
                style={styles.button}
                variant="primary"
                title="Entrar" 
                onPress={() => navigation.navigate('homeStack')} 

                //onPress={handleLogin} 
    />

            <View>
                    <View style={[styles.conta ]}>
                        <Text>Ainda não tem cadastro?</Text>
                        
                    </View>
                </View>
                    
                <Button
                style={[styles.buttonCad, { backgroundColor: '#b51515' }]} // Defina a cor de fundo desejada aqui
                color='#b51515'
                variant="primary"
                title="Cadastre-se" 
                onPress={() => navigation.navigate('cadastro')} 
                />
                    
        </View>
        </ImageBackground>
    );
};

export default Login;
function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
