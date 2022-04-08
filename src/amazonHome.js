import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationHelpersContext } from '@react-navigation/native'

export default function HomePage({navigation}) {
    const [imgArray,setImageArray]=useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
    ])
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/").then(res=>{
            setData(res.data)
            // console.log(data)
        }).catch(err=>console.log(err))
    },[])

    const navigProduct=()=>{
        navigation.navigate(product,item)
    }

    const renderItem=({item})=>{
        console.log(item)
        if(item.image!=null)
        return(
            <TouchableOpacity 
            onPress={navigProduct(item)}
            activeOpacity={0.8}
            style={styles.product}>
                <Image source={{uri:item.image}}
                style={styles.productImage}
                />
                <Text>{item.title}</Text>
                <Text>$ {item.price}</Text>
            </TouchableOpacity>
        )
    }
    
    return (
        <KeyboardAwareScrollView  style={styles.container}>
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
                    
                }}/>
                {/* <View style= {styles.productSlide}> */}
                <Text style={styles.productLikeHeader}>{"You Might Like"}</Text>
                    <FlatList
                    data={data}
                    renderItem={(item)=>(renderItem(item))}
                    horizontal={true}
                    keyExtractor={(item)=>item.id}
                    ItemSeparatorComponent={()=>(<View style={{marginRight:10}}></View>)}
                    style={styles.productSlide}
                    />
                {/* </View> */}
        </KeyboardAwareScrollView>
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
    },
    productImage:{
        height:150,
        width:150,
        resizeMode:'contain'
    },
    productSlide:{
        height:500,
        marginTop:20,
        marginLeft:10,
    },
    product:{
        width:150
    },
    productLikeHeader:{
        fontSize:25,
        marginTop:15,
        fontWeight:'600',
        marginLeft:10,
    }
})