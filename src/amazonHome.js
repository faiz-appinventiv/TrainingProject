import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Product from './product'
import styles from './amazonStyles'
import SearchHeader from './searchHeader'

export default function HomePage({ navigation }) {
    const [imgArray, setImageArray] = useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/").then(res => {
            setData(res.data)
            // console.log(data)
        }).catch(err => console.log(err))
    }, [])

    const navigProduct = (item) => {
        navigation.navigate("product", item)
    }

    const renderItem = ({ item }) => {
        console.log(item)
        if (item.image != null)
            return (
                <TouchableOpacity
                    onPress={() => navigProduct(item)}
                    activeOpacity={0.8}
                    style={styles.product}>
                    <Image source={{ uri: item.image }}
                        style={styles.productImage}
                    />
                    <Text>{item.title}</Text>
                    <Text>$ {item.price}</Text>
                </TouchableOpacity>
            )
    }

    const listEmpty = () => {
        return (
            <View style={styles.loadingView}>
                <Image source={require('../assets/images/loading.gif')}
                    style={styles.loading}
                     />
            </View>
        )
    }

    return (
        // <SafeAreaView style = {{flex: 1}}>
        <View style={styles.container}>
            <SearchHeader style={styles.SearchHeader}/>
            <KeyboardAwareScrollView>

            <SliderBox images={imgArray} imageLoadingColor={"#70feff"} autoplay={true} circleLoop ImageComponentStyle={styles.imgSliderView}
            activeOpacity={0.98}
            onCurrentImagePressed={(index) => {

                }} />
            {/* <View style= {styles.productSlide}> */}
            <Text style={styles.productLikeHeader}>{"You Might Like"}</Text>
            <FlatList
                data={data}
                renderItem={(item) => (renderItem(item))}
                horizontal={true}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={listEmpty}
                ItemSeparatorComponent={() => (<View style={{marginRight: 10 }}></View>)}
                style={styles.productSlide}
                showsHorizontalScrollIndicator={false}
            />
            </KeyboardAwareScrollView>
            {/* </View> */}
            
        </View>
        // </SafeAreaView>
    )
}