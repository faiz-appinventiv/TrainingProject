import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function weather() {
    [data,getData]=useState([])
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=08705cfb33d2310b9ed59faae6c5cda6').then((response)=>{
        getData=response.weather
        console.log(response.data)
    }).catch(err=>console.log(err))
    console.log(data)
  return (
      <SafeAreaView>
        <View>

        </View>
      </SafeAreaView>
    
  )
}