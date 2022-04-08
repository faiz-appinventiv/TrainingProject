import { Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomePage from './HomePage'
import User from './User'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './Cart'
import Menu from './Menu'
import Plus from './Plus'

export default function materialBottom() {

    const bottom = createMaterialBottomTabNavigator()
    // const bottom = createBottomTabNavigator()
    const stack = createNativeStackNavigator()

    // const stackNav=()=>{
    //     return(
    //         <stack.Navigator
    //         screenOptions={{headerShown:false}}>
    //             <stack.Screen name='Home'  component={HomeScreen}/>
    //         <stack.Screen name= 'Screen2' component ={Screen2}/>
    //         {/* <stack.Screen name='Screen1' component={Screen1}/> */}
    //         </stack.Navigator>
    //     )
    // }
  return (
    <NavigationContainer>
        <bottom.Navigator initialRouteName='Home'
        labeled={false}
        screenOptions={{tabBarShowLabel:false,headerShown:false}}

        // labeled={false}
        barStyle={{ backgroundColor: '#2DBFF8' }}
        // screenOptions={{style={backgroundColor:'lightgreen'}}}
        backBehavior={"history"}
        activeColor={'lightgreen'}
        >
            <bottom.Screen name='Home' component={HomePage}
            options={{tabBarLabel:'Home', tabBarIcon:({focused})=>{
            return(focused?
            <Image source={require('../assets/images/homefocused.png')}
            style={{height:24,width:25}}/>
            :<Image source={require('../assets/images/home.png')} style={{height:24,width:25}}/>
            )}}}/>
            
            <bottom.Screen name= 'User' component ={User} options={{ 
              tabBarIcon:({focused})=>{
                return(focused?
                <Image source={require('../assets/images/compassfocused.png')}
                style={{height:24,width:25}}/>
                :<Image source={require('../assets/images/compass.png')} style={{height:24,width:25}}/>
                )}
            }}/>
            <bottom.Screen name= 'Plus' component={Plus} options={{ 
              tabBarIcon:()=>{
                return(
                <Image source={require('../assets/images/plus.png')}
                style={{height:30,width:30}}/>)}
            }}/>
             <bottom.Screen name= 'Cart' component ={Cart} options={{
               tabBarIcon:({focused})=>{
                return(focused?
                <Image source={require('../assets/images/chatfocused.png')}
                style={{height:24,width:25}}/>
                :<Image source={require('../assets/images/chat.png')} style={{height:24,width:25}}/>
                )}
             }}/>
              <bottom.Screen name= 'Menu' component ={Menu} options={{tabBarIcon:({focused})=>{
                return(focused?
                <Image source={require('../assets/images/optionfocused.png')}
                style={{height:24,width:25}}/>
                :<Image source={require('../assets/images/options.png')} style={{height:24,width:25}}/>
                )}}}/>
            {/* <bottom.Screen name='Screen1' component={Screen1}/> */}
            {/* <bottom.Screen name='stackNav' component={stackNav}/> */}
        </bottom.Navigator>
    </NavigationContainer>
  )
}