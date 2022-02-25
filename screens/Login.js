import { StyleSheet, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import '../Firebase';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Auto login
    useEffect( ()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          navigation.replace('Chat');
          // ...
        } else {
          // User is signed out
          navigation.canGoBack() && 
          navigation.popToTop()
          // ...
        }
      });
    }
    )

    const signIn = ()=>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigation.replace('Chat');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }


  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter your email'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <Input
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />
      <View>
        <Button title='LOGIN' 
          icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white'
              }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: 'rgba(199, 43, 98, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 10,
              width: 200,
              marginVertical:20
            }}
            onPress={signIn}
        />

        <Button title='REGISTER' 
        icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 10,
            width: 200,
            marginVertical:20
          }}
          onPress={() => navigation.navigate('Register') }
        />

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    buttons: {
        borderRadius: 10,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 10,
        width: 200,
        marginVertical:20
      
    }
})