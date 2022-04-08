import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import axios from 'axios'

export default function HomePage() {
    const [imgArray,setImageArray]=useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
    ])
    const [data,useData] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>{
            setData(res.data.map(item=>item.url))
            console.log(data)
        })
    },[])
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Image source={require('../assets/images/search.png')}
                        style={styles.searchImage} />
                    <TextInput placeholder='Search' style={styles.searchBar} />
                    <Image source={require('../assets/images/scanner.png')} style={styles.scanImage} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.micTouchable}>
                    <Image source={require('../assets/images/mic.png')}
                        style={styles.micIcon}
                        resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
            <View style={styles.addressBar}>
                <TouchableOpacity style={{marginLeft:'1.5%'}}>
                    <Image
                    source={require('../assets/images/location.png')}
                    style={{height:15,width:15}}/>
                </TouchableOpacity>
                <Text style={styles.addressText}>{"Deliver to Faiz - New Delhi 110025"}</Text>
            </View>
            
                <SliderBox images={imgArray} imageLoadingColor={"#70feff"} autoplay={true} circleLoop ImageComponentStyle={styles.imgSliderView}
                onCurrentImagePressed={(index)=>{
                    
                }}
                dotStyle={{opacity:0}}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop:'10%'
    },
    search: {
        borderRadius: 5,
        marginTop: '10%',
        padding: 10,
        margin: 6,
        marginLeft: '3%',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: "85%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    searchBar: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
    },
    header: {
        backgroundColor: '#70feff',
        flexDirection: 'row'
    },
    searchImage: {
        height: 20,
        width: 20,
    },
    micIcon: {
        opacity: 0.9,
        height: 23,
        width: 23,
    },
    micTouchable: {
        position: 'absolute',
        right: 10,
        marginTop: "12%",
    },
    scanImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 10,
        top: 10,
        opacity: 0.5
    },
    addressBar:{
        backgroundColor:'#d2fefe',
        height:'5%',
        alignItems:'center',
        flexDirection:'row',
    },
    addressText:{
        marginLeft:'3%'
    },
    imgSliderView:{
        marginTop:"1%",
    }
})