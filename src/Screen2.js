import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Screen2({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>{"hello"}</Text> */}
      <TouchableOpacity 
      onPress={()=>(navigation.navigate('Screen1'))}>
          <Text>{"Screen1"}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
      onPress={()=>(navigation.navigate('Home'))}>
            <Text>{"Home"}</Text>
          </TouchableOpacity>
    </View>
  )
}