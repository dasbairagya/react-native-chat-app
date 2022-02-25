import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useState, useCallback, useEffect} from 'react'
import { getAuth, signOut } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import '../Firebase';
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = ({navigation}) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  useLayoutEffect( () => {
    const auth = getAuth();
    console.log(auth);
    navigation.setOptions({

        headerRight: () => (
          <TouchableOpacity style={{ marginRight:20 }} onPress={logOut}>
            <AntDesign name="logout" size={24} color="black"/>
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <View style={{marginLeft:10}}>
            <Avatar
              size={54}
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
              title="Bj"
              containerStyle={{ backgroundColor: 'grey' }}
            >
              <Avatar.Accessory size={23} />
            </Avatar>
            {/* <Avatar rounded source={{uri:auth?.currentUser?.photoURL}} /> */}
          </View>
        )
        
    })
  })

  const logOut = () =>{
    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.

      console.log('logout');
      navigation.replace('Login');
    }).catch((error) => {
      // An error happened.
    });
  }
  

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chat

const styles = StyleSheet.create({})