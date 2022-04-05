import React,{useRef, useLayoutEffect, useState, useEffect} from "react";
import {Text, TouchableOpacity, View, SafeAreaView, TextInput,StyleSheet, Alert} from 'react-native'

const advanceHooksPractice=()=>{

    /// ********useRef************

    // const inputRef = useRef(null)

    // const Focus=()=>{
    //     console.log(inputRef)
    //     inputRef.current.focus()
    // }
    // const Blur=()=>{
    //     inputRef.current.blur()
    // }



    // return(
    //     <SafeAreaView>
    //         <TextInput
    //         ref={inputRef}
    //         placeholder={'Type Here'}
    //         style={styles.inputText}
    //         onFocus={()=>Alert.alert('Focused')}
    //         onBlur={()=>Alert.alert('Blurred')}/>
    //         <TouchableOpacity
    //         onPress={Focus}>
    //             <Text>{'Focus'}</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //         onPress={Blur}>
    //             <Text>{'Blur'}</Text>
    //         </TouchableOpacity>
            
    //     </SafeAreaView>
    // )


    ///*******useLayoutEffect ************
        const [value,setValue]= useState(0)

        useLayoutEffect(()=>{
            if(value===0)
            setValue(+Math.random()*1000)
        },[value])

        // useEffect(() => {
        //     if(value===0)
        //         setValue(10+Math.random()*2)
        // }, [value])
        



        return(
            <SafeAreaView >
                <TouchableOpacity onPress={()=>setValue(0)}>
                <Text>{value}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )

   



}
export default advanceHooksPractice

const styles=StyleSheet.create(
    {
        inputText:{
            borderWidth:1,
           
            
        }
    }
)