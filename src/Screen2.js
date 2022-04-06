import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Screen2({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>{"hello"}</Text> */}
      <TouchableOpacity 
      onPress={()=>(navigation.navigate('Screen1',{itemId:69,otherParam:'this is a Param'}))}>
          <Text>{"Screen1"}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
      onPress={()=>(navigation.push('Home'))}>
            <Text>{"Home"}</Text>
          </TouchableOpacity>
    </View>
  )
}