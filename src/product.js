import { View, Text, TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'
import styles from './amazonStyles'


export default function Product({navigation,route}) {
    console.log(route.params)

    const back=()=>{
      navigation.goBack()
    }
  return (
    <View style={styles.productPage}>
<View style={styles.header}>
  <TouchableOpacity style={styles.backButtonTouchable}
  onPress={back}>
    <Image source ={require('../assets/images/left.png')}
     style={styles.backButton}/>
    </TouchableOpacity>
        <View style={[styles.search,{marginLeft:'10%',width:'80%'}]}>
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
        <TouchableOpacity style={{ marginLeft: '1.5%' }}>
            <Image
                source={require('../assets/images/location.png')}
                style={{ height: 15, width: 15 }} />
        </TouchableOpacity>
        <Text style={styles.addressText}>{"Deliver to Faiz - New Delhi 110025"}</Text>
    </View>
      <Text>product</Text>
      <Image source={{uri : route.params.image}}
      style={{height:150,width:150}}
      resizeMode={'contain'}/>
    </View>
  )
}