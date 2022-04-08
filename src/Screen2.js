import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Screen2({navigation,route}) {
  const {img} = route.params
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     {/* <Text>{"hello"}</Text> */}
    //   <TouchableOpacity 
    //   onPress={()=>(navigation.navigate('Screen1',{itemId:69,otherParam:'this is a Param'}))}>
    //       <Text>{"Screen1"}</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity 
    //   onPress={()=>(navigation.navigate('Home'))}>
    //         <Text>{"Home"}</Text>
    //       </TouchableOpacity>
    // </View>
    <View>
      <Image source={{uri:img}}
      style={{height:"50%",width:"50%",alignSelf:'center',marginTop:200}}/>
    </View>
  )
}