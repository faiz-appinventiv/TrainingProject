
import { View, Text, TouchableOpacity ,Button} from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen({ navigation }) {
    // const [prac,setPrac]=useState(1)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Screen2',{
                    img:"https://source.unsplash.com/1024x768/?nature",
                    // otherParam: 'anything you want here',
                  })}}>
                <Text>{"Screen2"}</Text>
            </TouchableOpacity>
            <Button title="Go back" onPress={() => navigation.goBack()} />

            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify()}</Text>
      {/* <Text>otherParam: {JSON.stringify(prac)}</Text> */}
      {/* <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }/> */}
        {/* <Button
        title='Update'
        onPress={() =>{
            navigation.setParams({
                itemId:1,
            })
            console.log(itemId)
        }}
        /> */}
        {/* </View> */}
        </View>
    )
}