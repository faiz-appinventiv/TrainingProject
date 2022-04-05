
import { View, Text, TouchableOpacity ,Button} from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen({ navigation }) {
    // const [prac,setPrac]=useState(1)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {navigation.navigate('Screen1',{
                    itemId: 66,
                    // otherParam: 'anything you want here',
                  })}}>
                <Text>{"Screen1"}</Text>
            </TouchableOpacity>
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