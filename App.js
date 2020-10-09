/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


// SCREENS
import NoteManager from './Components/Screens/NoteManager'
import Login from './Components/Screens/Login'
import Register from './Components/Screens/Register'
import Forget from './Components/Screens/Forget'

// STYLE
import Styles from './Styles/Styles'

// REDUX
import store from './Store/Store'
import {Provider} from 'react-redux'

const Stack = createStackNavigator();


const App = () => {
  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
            <Stack.Screen name="NoteManager" component={NoteManager} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
     
    </>
  );
};


export default App;
