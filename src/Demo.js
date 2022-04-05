import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState} from 'react'


export default function Demo() {
    const [amount, setAmount] = useState(990.5);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headertext}>{"Make Payment"}</Text>
                    <Image style={styles.back} source={(require("./assets/images/back.png"))}/>
                </View>
                <Text style={styles.text}>{"Total"}</Text>
                <Text style={styles.amount}>{"$" + amount}</Text>
                <View style={styles.buttons}>
                    <View style={styles.button1}>
                        <TouchableOpacity onPress={()=>{
                            setAmount(amount+10)
                        }} activeOpacity={0.8} style={styles.imageBlock}>
                            <Image resizeMode='contain' style={styles.image} source={(require('./assets/images/card.png'))} />
                            <Text style={styles.text}>{"Debit Card"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            setAmount(amount-10)
                        }} activeOpacity={0.8} style={styles.imageBlock}>
                            <Image resizeMode='contain' style={styles.image} source={(require('./assets/images/external.png'))} />
                            <Text style={styles.text}>{"NetBanking"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button1}>
                        <TouchableOpacity onPress={()=>{
                            setAmount(amount-10)
                        }} style={styles.imageBlock} activeOpacity={0.8}>
                            <Image resizeMode='contain' style={styles.image} source={(require('./assets/images/cash.png'))} />
                            <Text style={styles.text}>{"Cash"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{
                            setAmount(amount+10)
                        }} style={styles.imageBlock} activeOpacity={0.8}>
                            <Image resizeMode='contain' style={styles.image} source={(require('./assets/images/gift.png'))} />
                            <Text style={styles.text}>{"GiftCard"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:0.3}}>
                    <Text onPress={()=>{
                        Alert.alert("Payment Successful of Amount $"+ amount)
                        setAmount(990.50)}}  style={styles.confirm}>{"Confirm Payment"}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center'
    },
    amount: {
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 20,
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
    },
    button1: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        // marginLeft:30,
        // marginRight:30,
    },
    image: {
        height: 90,
        width: 90,
        margin: 20,
    },
    imageBlock: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'grey',
        borderBottomWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    header: {
        justifyContent: 'space-around',
        marginBottom:20,
        height: 40,
        alignItems: 'center',
        // backgroundColor: 'white',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.44,
        // shadowRadius: 10.32,
        // elevation: 16,
        // borderRadius: 30,
    },
    headertext:{
        fontSize: 20,
        color: 'black',
        fontStyle: 'italic',
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    back:{
        height:25,
        width:25,
        position:'absolute',
        top:10,
        left:10
    },
    confirm:{
        fontSize:25,
        position:'absolute',
        bottom:0,
        // flexDirection:'column-reverse',
        alignSelf:'center',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'cyan',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    }
})