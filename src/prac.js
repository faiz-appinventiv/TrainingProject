import { View, Text,SafeAreaView, TouchableOpacity,Alert } from 'react-native'
import React from 'react'

export default function prac() {
  return (
    <SafeAreaView>
      <Text>prac</Text>
      <TouchableOpacity
      onPress={()=>{
        Alert.alert(
          'Clicked',
          'My Alert Msg',
          [
            {
              text: 'Ask me later', 
              onPress: () => console.log('Ask me later pressed')
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK', 
              onPress: () => console.log('OK Pressed')
            },
            {
              text: 'ehhh', 
              onPress: () => console.log('OK Pressed')
            },
          ],
          {cancelable: true},
        );
        
      }}>
          <Text>{"Click Here"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}