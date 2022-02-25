import React from 'react';
import Register from './screens/Register';
import Login from './screens/Login';
import Chat from './screens/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import '../Firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Chat"> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
          options={{
            title: 'Login',
            headerStyle: {
              // backgroundColor: '#f4511e',
              backgroundColor: 'rgba(199, 43, 98, 1)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen name="Register" component={Register} 
          options={{
              title: 'Register',
              headerStyle: {
                backgroundColor: '#34a1eb',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
        />
        <Stack.Screen name="Chat" component={Chat} 
          options={{
              title: 'Chat',
              headerStyle: {
                backgroundColor: '#1aedaa',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                marginLeft: 50
              }
            }}
          />
      </Stack.Navigator>
      </NavigationContainer>
  );
}