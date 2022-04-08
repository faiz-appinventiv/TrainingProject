import { Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import HomePage from './amazonHome'
import User from './User'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from './Cart'
import Menu from './Menu'
import Product from './product'


export default function materialBottom() {

    // const bottom = createMaterialBottomTabNavigator()
    const bottom = createBottomTabNavigator()
    const stack = createNativeStackNavigator()

function HomeStack(){
  return(
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='HomePage' component={HomePage}/>
        <stack.Screen name="product" component={Product}/>
      </stack.Navigator>
  )
}

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
            <bottom.Screen name='Home' component={HomeStack}
            options={{tabBarLabel:'Home', tabBarIcon:({focused})=>{
            return(focused?
            <Image source={require('../assets/images/homefocused.png')}
            style={{height:24,width:25}}/>
            :<Image source={require('../assets/images/home.png')} style={{height:24,width:25}}/>
            )}}}/>
            
            <bottom.Screen name= 'User' component ={User} options={{ 
              tabBarIcon:({focused})=>{
                return(focused?
                <Image source={require('../assets/images/userfocused.png')}
                style={{height:24,width:25}}/>
                :<Image source={require('../assets/images/user.png')} style={{height:24,width:25}}/>
                )}
            }}/>
             <bottom.Screen name= 'Cart' component ={Cart} options={{
               tabBarIcon:({focused})=>{
                return(focused?
                <Image source={require('../assets/images/cartfocused.png')}
                style={{height:24,width:25}}/>
                :<Image source={require('../assets/images/cart.png')} style={{height:24,width:25}}/>
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