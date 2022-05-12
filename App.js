import {StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native';
import {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function App() {
  let mySignUp = <SignUp/>;
  let myLogin = <Login/>;

  const functionalities = [myLogin,mySignUp];
  const [registerMe, setRegisterMe] = useState(true);

  function determineFunction(){
   
    if(registerMe === false){
      setRegisterMe(false);
    }else{
      setRegisterMe(true);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {registerMe? functionalities[0] : functionalities[1]} 
         <View style={styles.firstView}>
          <Text  onPress={determineFunction} style={{color:'#000', fontSize:20, fontWeight:'600'}}>
           {registerMe? 'SIGN UP':'LOGIN'}
          </Text>
         </View>
        <StatusBar style="auto"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 3,
    backgroundColor:'#04032D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstView:{
    height:60,
    width:'85%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 15,
    borderStyle:'solid',
    borderColor:'#FFFC00',
    borderWidth:1,
    backgroundColor:'#FFFC00'
  },
   action: {
     backgroundColor:'#04032D',
     flex:1
   } 
});
