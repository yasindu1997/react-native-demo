import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ComponentFunction from './components/ComponentFunction'
import ComponentClass from './components/ComponetClass'
import CoreComponents from './components/CoreComponents'
import Flex from './components/Flex'
import LifeCycle from './components/LifeCycle'
import KeyBordView from './components/KeyBordView'
import NativebaseView from './components/NativebaseView'
import FABExample from './components/FABExample'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Fetch from './components/Fetch'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Login">
      //     <Stack.Screen name="Login" component={LoginScreen} />
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <Fetch />
    )
  }
}