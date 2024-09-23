import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
      },
      background: {
        flex: 1,
        width:'100%',
        height:'100%',
    },

      help:{
        width:280,
        height:280,
        marginTop:10
      },

      titulo:{
        fontSize:20,
        marginTop:5 ,
        marginLeft:23,
        fontWeight:'bold',
        marginBottom:5
      },
      input:{
        width:370,
        height:50,
        borderRadius:25,
        backgroundColor:'#ebebeb',
        marginLeft:20,
        padding:15,
        borderColor:'#b51515',
      },
      margin:{
        marginTop:15
      },

      buttonCad:{
        marginTop:60,
        width:160,
        color:'#b51515',
        marginBottom:60
      },

   
});

export default styles;
