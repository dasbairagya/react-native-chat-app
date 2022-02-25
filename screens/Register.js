import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Input, Button } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import '../Firebase';


const Register = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () =>{ //this peace of code is provided by firebase
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: imageUrl ? imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fuser&psig=AOvVaw04-Yu48P788mpl9_dyBxQs&ust=1645856763756000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICR-7ecmvYCFQAAAAAdAAAAABAD"
          }).then(() => {
            // Profile updated!
            alert('User added!');
            navigation.replace('Chat');
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
          // navigation.popToTop();
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Input
        placeholder='Enter your name'
        label='Name'
        leftIcon={{ type: 'material', name: 'rowing' }}
        value={name}
        onChangeText={(name) => setName(name)}
      />
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
      <Input
        placeholder='Enter your image url'
        label='Profile Picture'
        leftIcon={{ type: 'material', name: 'face' }}
        value={imageUrl}
        onChangeText={(imageUrl) => setImageUrl(imageUrl)}
      />
      <TouchableOpacity>
        <Button 
        title='REGISTER' 
        icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
        buttonStyle={{
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 10,
              width: 200,
              marginVertical:20
            }}
        onPress={register}
        />
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    button: {
        marginTop: 10,
        color: '#fff',
        width: 200,
    }
})