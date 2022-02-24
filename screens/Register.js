import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import '../Firebase'


const Register = () => {

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
            photoURL: imageUrl ? imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FiThJmoo_white-gray-circle-avatar-png-transparent-png%2F&psig=AOvVaw0-tQ9pN5Ie2FJuzgr1bZ2e&ust=1645742170074000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCm-73xlvYCFQAAAAAdAAAAABADhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Favatar&psig=AOvVaw0-tQ9pN5Ie2FJuzgr1bZ2e&ust=1645742170074000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCm-73xlvYCFQAAAAAdAAAAABAP"
          }).then(() => {
            // Profile updated!
            alert('User added!');
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
    }

  return (
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
        label='password'
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

        <Button 
        title='REGISTER' 
        icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
        style={styles.button} onPress={register}/>

    </View>
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