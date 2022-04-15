import { View, Text, TouchableOpacity,Image,TextInput } from "react-native";
import styles from "./amazonStyles";
import React from "react";

export default function SearchHeader({ navigation }) {
    return (
        <View style={styles.SearchHeader}>
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
        <TouchableOpacity style={{ marginLeft: '1.5%' }}>
            <Image
                source={require('../assets/images/location.png')}
                style={{ height: 15, width: 15 }} />
        </TouchableOpacity>
        <Text style={styles.addressText}>{"Deliver to Faiz - New Delhi 110025"}</Text>
    </View>
    </View>
        )
    }
