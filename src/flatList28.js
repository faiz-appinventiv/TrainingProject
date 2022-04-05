import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function flatList28() {
    let listEnd=useRef(null)
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [visible,setVisible]=useState(false)

    useEffect(()=>{
        axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then(res=>{
            setData([...data,...res.data.data.map(item=>{
                return{id : item.id,
                name: item.name,
                airName: item.airline[0].name,
                country: item.airline[0].country,
                headq: item.airline[0].head_quaters,
                slogan: item.airline[0].slogan,
                logo: item.airline[0].logo
                }
            })])
        })
    },[page])

    const header =()=>{
            return (
                <View style={styles.header}>
                    <Text style={styles.headerText}>{"Passenger List"}</Text>
                </View>
            )
    }

    const renderMyItem = ({item}) => {
        // console.log(item)
        const {name , airName, country, headq, slogan, logo} =  item;
        return (
            <View style={styles.textBlock}>
                    <View>
                        <Text style={[styles.text,{textAlign:'center', marginBottom:5}]}>{airName}</Text>
                        <Text style={[styles.text,{fontWeight:'400'}]}>{"Pasenger Name: "}<Text style={[styles.text,{fontWeight:'200'}]}>{name}</Text></Text>                        
                        <Image
                        source={{uri:logo}}
                        resizeMode={'contain'}
                        style={styles.logo}
                    />
                    <Text style={[styles.text,{fontWeight:'400'}]}>{"Airline Name: "}<Text style={[styles.text,{fontWeight:'200'}]}>{airName}</Text></Text>
                    <Text style={[styles.text,{fontWeight:'400'}]}>{"Country: "}<Text style={[styles.text,{fontWeight:'200'}]}>{country}</Text></Text><Text style={[styles.text,{fontWeight:'400'}]}>{"Headquarter: "}<Text style={[styles.text,{fontWeight:'200'}]}>{headq}</Text></Text>
                    <Text style={[styles.text,{alignSelf:'center', fontWeight:'bold',fontStyle:'italic',fontSize:30}]}>{slogan}</Text>
                    </View>
            </View>

        )
    }

    const endReached=()=>{
        setVisible(true)
        setPage(page+1) 
    }

    const EndButton=()=>{
        obj = { index: 0 }
        listEnd.current.scrollToIndex(obj)
    }
    

  return (
    <SafeAreaView style={styles.parent}>
            {header()}
            <FlatList
            data={data}
            renderItem={renderMyItem}
            keyExtractor={(item,index)=>index}
            onEndReached={endReached}
            onEndReachedThreshold={1}
            ref={listEnd}
            />
            {visible && <TouchableOpacity
            activeOpacity={0.8}
            onPress={EndButton}
            style={{position:'absolute',bottom:20,alignSelf:'center'}}
            >
                <Text >{"Go To TOP"}</Text>
            </TouchableOpacity>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#E9E5E5',
        flex: 1,
    }, innerParent: {
        flex: 1,
        margin: 1,
        height:20
    },
 
    header: {
        justifyContent: 'space-around',
        height: 35,
        backgroundColor: '',
        alignItems: 'center',
        backgroundColor: '#323030',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 8,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 10.32,
        // elevation: 16,
        borderRadius: 30,
        marginLeft: '25%',
        marginRight: '25%',
    },
    headerText: {
        fontSize: 20,
        color: '#E9E5E5',
        fontStyle: 'italic',
    },
    textBlock: {
        flex: 1,
        padding:20,
        margin:10,
        borderRadius: 10,
        backgroundColor: '#E9E5E5',
        // backgroundColor:'aqua',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    text: {
        marginTop:3,
        fontSize: 20,
        color: 'black',
        justifyContent: 'space-around'
    },
    moveToTopImage:{
        height:30,
        width:30,
        position:'absolute',
        marginLeft:'50%'
    },
    logo:{
        height:70,
        width:'100%',
        alignSelf:'center', 
    }
})