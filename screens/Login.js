import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        label='password'
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
                color: 'white',
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
        />

        <Button title='REGISTER' 
        icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
          style={styles.buttons}  
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
        marginTop: 50,
        padding:15,
        color: '#ccc',
        width: 200,
        borderWidth: 0,
        borderRadius: 10,
      
    }
})