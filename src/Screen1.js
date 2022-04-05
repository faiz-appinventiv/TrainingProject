import { View, Text ,TouchableOpacity,Button} from 'react-native'
import React from 'react'

export default function Screen1({route, navigation}) {
    const {itemId, otherParam} =route.params
    return(
    // <View>
    //     <TouchableOpacity
    //     onPress={()=>(navigation.push("Home"))}>
    //         <Text>{"Home"}</Text>
    //     </TouchableOpacity>
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      <Button
        title="Go to Screen1... again"
        onPress={() =>
          navigation.push('Screen1', {
            itemId: Math.floor(Math.random() * 100),
          })
        }/>
        <Button
        title='Update'
        onPress={() =>{
            navigation.setParams({
                itemId:Math.floor(Math.random() * 100),
            })
            console.log(itemId)
        }}
        />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
        
        // <TouchableOpacity
        // onPress={()=>(navigation.push("Screen2"))}>
        // <Text>{"Screen2"}</Text>
        // </TouchableOpacity>
        // </View>
    )
}