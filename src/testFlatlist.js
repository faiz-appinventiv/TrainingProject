import { View, Text ,FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function testFlatlist() {
    const [data,setData]=useState([1,2,3,4,5,6,8,7])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
    //         res.data.map(item=>item.title)
    //     })
    // })
  return (
    <View style={{flex:1,paddingTop:70,alignItems:'center'}}> 
    <ScrollView>
        <FlatList
        data={data}
        renderItem={(item) => {return(<View><Text>hello</Text></View>)}}       
        />
        </ScrollView>
    </View>
  )
}