import { View, Text, ScrollView, StyleSheet, Image ,Alert, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Demo() {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Image style={styles.image} resizeMode='stretch' source={{uri:'https://picsum.photos/200/300'}}/>
      </View>
      <TouchableOpacity style={{flex:0.2}} onPress={()=>{
        Alert.alert("Clicked")
      }}>
      <Text style={styles.text}>{"Click Here"}</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scroll} bounces={false}>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
          <Text style={styles.text}>{"Hello"}</Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      // alignItems:'center',
      backgroundColor:'aqua',
      // paddingTop:20,
      },
      innerView:{
        flex:1,
        backgroundColor:'yellow'
      },
    text:{
      fontSize:30,
      fontWeight:'bold',
      backgroundColor:'red',
      margin:10,
      alignSelf:'center'
    },
    scroll:{
      flex:1,
      // bounces:false,
        },
    image:{
      height:'100%',
      width:'100%',
    }
})