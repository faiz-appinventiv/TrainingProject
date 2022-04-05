import { StyleSheet } from "react-native"
import React from 'react'

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewBlock:{
        flex:1,
        marginTop:'35%'
    },
    bgimage: {
        // height: '25%',
        // width: '112%',
        right:0,
        resizeMode: 'contain',
        position:'absolute'
    },
    loginHeaderText:{
        fontSize:40,
        marginLeft:25,
        marginBottom:5,
        fontWeight:'bold'
    },
    emailBlock:{
        padding:10,
        borderColor: '#DEDDDB',
        borderWidth:1,
        marginTop:10,
        width:'90%',
        height:'10%',
        alignSelf:'center',
        borderRadius: 7,
    },
    blockText:{
        marginLeft:15,
        fontSize:15,
        width:'90%'
    },
    text:{
        marginLeft:15,
        marginBottom:3,
        fontSize:15,
    },
    // textInput:{
    //     alignSelf:'baseline',
    //     fontSize:15,
    //     marginLeft:20,
    // },
    enterDetailsText:{
        color:'grey',
        marginLeft:25,
        marginBottom:5,
    },
    forgotPasswordText:{
        textAlign:'right',
        marginTop:"15%",
        marginRight:20,
    },
    loginButton:{
        marginTop:30,
        backgroundColor:'#F1B22A',
        width:"90%",
        borderRadius:10,
        height:45,
        alignSelf:'center',
        justifyContent:'center'
    },
    loginButtonText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    bottomLogin:{
        flexDirection:'row',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    bottom:{
        flexDirection:'row',
        marginTop:"30%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    visiblity:{
        // marginLeft:'55%',
        position:'absolute',
        right:10,
        bottom:10
    },
    eyeImage:{
        height:25,
        width:25,
        marginBottom:4,
        resizeMode:'contain',
    },
    checkimg:{
        height:20,
        width:20,
        resizeMode:'contain'
    },
    checkBox:{
        flexDirection:'row',
        padding:25,
    },
    errorMessage:{
        color:'red',
        margin:5,
        marginLeft:30,
    },
    errorPasswordMessage:{
        color:'red',
    }
})
export default styles