import { View, Text, SafeAreaView,Image, FlatList, RefreshControl,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function func22() {
    const [data,setData]=useState([])
    const [count,setCount]=useState(1)

    const APICall=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${((count-1)*10)}&_limit=10`).then(res=>{
            console.log('100000',res.data)
        setData([...data,...res.data])
        console.log(data)
        // setRef(res.data)
    }).catch(err=>{
        console.log(err)
    })
    }

useEffect(()=>{
    APICall()
    return(
        console.log("UNMOUNTING")
    )
},[count])

const renderMyItem=({item})=>{
    return (
        <View style={{margin:10}}>
        <Text>{`${item.id} ${item.title}`}</Text>
        <Image
            source={{uri:item.url}}
            style={{height:50,width:50}}
        />
        </View>
    )
}

const refresh=()=>{
    setCount(count+1)
    // <ActivityIndicator/>
    console.log("count",count)
    return (
    // <View>
    // <ActivityIndicator />
    // </View>
    <RefreshControl
    refreshing={false}
    />)
}


  return (
    <SafeAreaView>
        <FlatList
        data={data}
        renderItem={(item)=>renderMyItem(item)}
        // ItemSeparatorComponent={()=>}
        refreshing={false}
        onRefresh={refresh}
        keyExtractor={(item)=>item.id}
        />
    </SafeAreaView>
  )
}