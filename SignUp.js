import { StyleSheet, Text, View,TextInput} from 'react-native';

export default function SignUp() {
    return (
     <View style={styles.mainView}>
       <View style={styles.hearderSection}>
        <View style={styles.header}>
         <View style={{width:'100%'}}>
         <Text style={{fontWeight:'800', fontSize:40, color:'#fff'}}>Create Account</Text>
         </View>
         </View>
       </View>
       <View style={styles.credSection}>
       <TextInput style={styles.input} placeholder="Email" ></TextInput>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
         <TextInput style={styles.input} placeholder="Mobile No."></TextInput>
         <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
         <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry></TextInput>
         </View>
         <View style={styles.loginSection}>
         <View style={styles.loginSent}><Text style={{fontWeight:'bold', fontSize:20}}>Sign Up</Text></View>
       </View>
     </View>       
    )
}

const styles = StyleSheet.create({  
    mainView:{
        height:'100%',
        width:'100%',
        backgroundColor:'#04032D',
    },
    header:{
        marginTop:50,
        padding:5,
        
    },
    hearderSection:{
        justifyContent:'center',
        alignItems:'center'
    },

    credSection:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
    },

    input:{
        borderColor:'#fff',
        backgroundColor:'#34465D',
        padding:10,
        borderRadius: 15,
        width:'88%',
        marginTop:50,
        padding:20,
        borderStyle:'solid',
        borderWidth:1
    },
    loginSent:{
        borderColor:'#fff',
        backgroundColor:'#FFFC00',
        padding:10,
        borderRadius: 15,
        width:'88%',
        marginTop:50,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
       
    },
    loginSection:{
        justifyContent:'center',
        alignItems:'center',
    },
    register:{
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
    }
  
})