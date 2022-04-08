import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from './Screen1'
import HomeScreen from './HomeScreen'
import Screen2 from './Screen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

export default function navigate() {


const RootStack = createNativeStackNavigator()
const TabNavigator = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name='Home' component={HomeScreen}/>
            <RootStack.Screen name='Screen1' component={Screen1}/>
            <RootStack.Screen name='Screen2' component={Screen2}/>
        </RootStack.Navigator>
        </NavigationContainer>
  )
}