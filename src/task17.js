import { View, Text, SafeAreaView, FlatList,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function task17() {
    const [data,useData]=useState({})
    const [page,usePage]=useState(1)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>{
            useData(res.data.slice(0,page*50))
            usePage(page+1)
            // console.log(data)
        })
    },[])

    const renderItem=({item})=>{
        // console.log(item)
        return(
            <View style={styles.renderContainer}>
                <View style={styles.innerRender}>
                <Text style={styles.text}>{"ID:"},{item.id}</Text>
                <Text style={styles.text}>{"Name:"},{item.name}</Text>
                <Text style={styles.text}>{"Email:"},{item.email}</Text>
                <Text style={styles.text}>{"Body :"},{item.body}</Text>
                </View>
            </View>
        )
    }
    const onEndReached=()=>{
        console.log('page:',page)
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>{
            usePage(page+1)
            useData(res.data.slice(0,page*50))
            console.log(data)
        })
    }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            renderItem={(item)=>{
                return renderItem(item)
            }}
            keyExtractor={(item,index)=>{
                return index
            }}
            onEndReached={()=>{
                onEndReached()
            }}
            onEndReachedThreshold={3}
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    renderContainer:{
        marginBottom:20,
        backgroundColor:'green',
        borderRadius:30,
        margin:10
    },
    text:{
        fontSize:20,
        marginBottom:3
    },
    innerRender:{
        margin:10,
    }
})