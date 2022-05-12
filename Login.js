import { StyleSheet, Text, View,TextInput} from 'react-native';

export default function Login() {
    return (
   <View style={styles.main}>
       <View style={styles.hearderSection}>
         <View style={styles.header}>  
          <View style={{width:'100%'}}> <Text style={{fontWeight:'800', fontSize:40, color:'#fff'}}>Welcome Back!</Text>
           </View>
           <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}> 
          <Text style={{fontWeight:'800', fontSize:20, color:'#fff'}}>Login to continue</Text>
         </View>
        </View>
      </View>
       <View style={styles.credSection}>
        <TextInput style={styles.input} placeholder="Username" ></TextInput>
         <TextInput style={styles.input} placeholder="Password" secureTextEntry ></TextInput>
          <View style={{marginTop:10, justifyContent:'flex-end'}}><Text style={{fontSize:20, fontWeight:'600',color:'#fff'}}>Forgot Password?</Text></View> 
          </View>
          <View style={styles.loginSection}>
         <View style={styles.loginSent}><Text style={{fontWeight:'bold', fontSize:20}}>LOGIN</Text></View>
       </View>
     </View>
          
    )
}

const styles = StyleSheet.create({  
    main:{
        height:'100%',
        width:'100%',
        backgroundColor:'#04032D',
    },
    header:{
        marginTop:150,
        padding:5,
        
    },
    hearderSection:{
        justifyContent:'center',
        alignItems:'center'
    },

    credSection:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
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
        marginTop:67,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
       
    },
    loginSection:{
        justifyContent:'center',
        alignItems:'center',
    }
  
})