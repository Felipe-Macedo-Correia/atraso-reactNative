import { ImageBackground, StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    container:{
        flex:1,
        alignContent:'center',

    },
    background:{
        flex: 1,
        width:'100%',
        height:'100%',
    },
    scanner:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'60%',
        
        
    },
    conteudoScanner:{
         display:'flex',
    },
    titulo:{
        marginBottom:20,
        color:'#B51515',
        fontWeight:'bold',
        fontSize:25
    },

   });
export default styles;

