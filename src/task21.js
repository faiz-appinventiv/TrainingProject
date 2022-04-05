import { FlatList, StyleSheet, Text, View,SafeAreaView, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

// const Refresh=()=>{
//     axios.get('https://jsonplaceholder.typicode.com/commentsss').then(res=>{
//         setData({email:'accessfaiz'})
//     }).catch(err=>{
//         console.log('err')
//     })
//   }

export default function task21() {
    const [data,setData]=useState({})
    const [page,setPage]=useState(0)
    // const [isRefreshing,setIsRefreshing]=useState(false)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${page*10}&_limit=10`).then(res=>{
            setPage(page+1)
            setData(res.data)
            console.log(data)
        }).catch(err=>{
            console.log('err')
        })
    },[])

  return (
    <SafeAreaView>
      <Text>task21</Text>
      <FlatList
      data={data}
      renderItem={({item})=>{
        //   console.log(item.email)
          return (
              <View>
                  <Text>{`${item.email} ${item.id}`}</Text>
              </View>
          )
      }}
      ItemSeparatorComponent={()=>{
          return(
              <View style={{margin:5}}></View>
          )
      }}
      refreshing={false}
      onRefresh={()=>{
        //   setIsRefreshing(true)
        axios.get('https://jsonplaceholder.typicode.com/comments?_start=${page*10}&_limit=10').then(res=>{
            setPage(page+1)
            setData([...data,...res.data])
        }).catch(err=>{
            console.log('err')
        })
        return(
            <RefreshControl
            refreshing={false}
            />
        )
        // setData({email:'access'})
        // setIsRefreshing(false)
      }}
    //   refreshing={false}
      
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})