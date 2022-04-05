import axios from "axios";
import React, { useState } from "react";
import { FlatList, SafeAreaView, View, Text, Alert,StyleSheet } from "react-native";
// import mock from "./mockData.json";


export default function Demo1() {
    const [APIData, setAPIData] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/users').then((incomingData) => {
        // console.log(incomingData)
        setAPIData(incomingData.data)
    }).catch(() => {
        console.log('ERROR')
    })
    const renderMyItem = (item) => {
        return (
            <View >
                <Text style={styles.text}>{(item.username)}</Text>
                <Text style={styles.text}>{(item.name)}</Text>
                <Text style={styles.text}>{(item.email)}</Text>
                <Text style={styles.text}>{(item.city)}</Text>
            </View>
        )
    }
    // console.log(data)
    // const [data,setData]=useState(mock.map(item=>item))

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Text>{"Hello"}</Text> */}
            <FlatList
                data={APIData}
                // ListHeaderComponent={()=>{return(<Text>Hello</Text>)}}
                keyExtractor={(item) => item.id}
                // onRefresh={()=>{
                //     Alert.alert("Refreshing")
                // }}
                // refreshing={true}
                // numColumns={2}
                // columnWrapperStyle={styles.flatListColumnStyle}
                contentContainerStyle={{ justifyContent: 'space-between', }}
                ItemSeparatorComponent={() => {
                    return (<View
                        style={{ width: '100%', height: 10, borderTopWidth: 2 }}
                    ></View>)
                }}
                // columnWrapperStyle={{borderWidth:2,borderColor:'red',backgroundColor:'red',justifyContent:'space-between',}}

                renderItem={({ item }) => {
                    // console.log('hel')
                    return (renderMyItem(item))
                }}
                keyExtractor={item => item.id}
                
                onEndReachedThreshold={1}
                ListEmptyComponent={()=>{
                    return(<View>
                        <Text>{"Empty Error"}</Text>
                    </View>)
                }
                }
                onEndReached={()=>{
                }}
                onEndReachedThreshold={0.5}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:30
    }
})

// import axios from 'axios';
// import React, {useState} from 'react';
// import {FlatList, SafeAreaView, View, Text} from 'react-native';
// // import mock from "./mockData.json";

// export default function Demo1() {
//   const [APIData, setAPIData] = useState([]);
//   axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then(incomingData => {
//       // console.log(incomingData)
//       setAPIData(incomingData.data);
//     })
//     .catch(() => {
//       console.log('ERROR');
//     });

//   // console.log(data)
//   // const [data,setData]=useState(mock.map(item=>item))

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={APIData}
//         // ListHeaderComponent={()=>{return(<Text>Hello</Text>)}}
//         renderItem={({item}) => {
//           return (
//             <View>
//               <Text>{'Hello'}</Text>
//               <Text>{item.email}</Text>
//             </View>
//           );
//         }}
//       />
//     </SafeAreaView>
//   );
// };
