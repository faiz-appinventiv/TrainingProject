import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { Component } from 'react';
import JSONDATA from "./mockData.json"

export default class ReactJsx extends Component {

    constructor(props) {
        super(props)
        this.state={ Data:(JSONDATA.map((item)=>item)),
        helper:(JSONDATA.map((item)=>item))}
        // this.state = {
        //     Data: [{
        //       id:1,
        //       image:{uri:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F10%2F15%2Firon-man.jpg&q=60'},
        //       name: 'Faiz',
        //         department: 'React-native',
        //         dob: '17-may-2022',
        //         Address: {
        //             locality: 'Zakir Nagar, New Delhi',
        //             pincode: 110025,
        //             country: 'India',
        //         },
        //     },
        //     {    id:2,
        //         image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h' },
        //         name: 'Satyam',
        //         department: 'React-native',
        //         dob: '15-march-1999',
        //         Address: {
        //             locality: 'Greater Noida',
        //             pincode: 201301,
        //             country: 'India',
        //         },
        //     },

        //     {    id:3,
        //         image: (require("./assets/images/paul.jpeg")),
        //         name: 'Rishabh',
        //         department: 'React-native',
        //         dob: '4-march-2022',
        //         Address: {
        //             locality: 'New Delhi',
        //             pincode: 201301,
        //             country: 'India',
        //         },
        //     },]
        // }
    }

    header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{"List of Students"}</Text>
            </View>
        )
    }
    renderMyItem = (item, id) => {
        const { first_name, last_name, email, gender, image,city,country } = item
        return (
            <View key={id} style={styles.textBlock}>
                <View style={styles.innerTextBlock}>
                    <Image source={image} style={styles.images} />
                    <View style={{ marginRight: 50 }}>
                        <Text style={styles.text}>{"Name: " + first_name +" "+ last_name}</Text>
                        <Text style={styles.text}>{"Email: " + email}</Text>
                        <Text style={styles.text}>{"Gender: " + gender}</Text>
                        <Text style={styles.text}>{"Address: " + city +" "+ country}</Text>
                        {/* <Text style={styles.text}>{"Address: " + Address.locality + ", " + Address.country + " - " + Address.pincode}</Text> */}
                    </View>
                    <TouchableOpacity onPress={() => {
                        let i = this.state.Data.findIndex(i => i == item)
                        this.deleteItem(i)
                    }} style={styles.button}>
                        <Image source={require('./assets/images/trash.png')} style={styles.dlt} />
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    addItem = () => {
        return {
            id:101,
            image: (require("./assets/images/paul.jpeg")),
            first_name: 'Alok',
            last_name:'Nath',
            gender: 'Male',
            email: 'none@noone.com',
        }
    }
    deleteItem = (i) => {
      this.setState(this.state.Data.splice(i, 1))
        // this.setState({})

    }
    // componentDidUpdate() {
    //     console.log("Updated")
    // }
    searchData=(text)=>{
        if(text.length==0){
            return this.state.helper
        }else{
            narr = this.state.helper.filter(item=>item.first_name.includes(text))
            return (narr)
        }
  }
        render() {
        return (
            <SafeAreaView style={styles.parent}>
                <View style={styles.innerParent}>
                    {this.header()}
                    <View style={{ flex: 1 }}>
                      <View>
                        <TextInput placeholder='Search...' style={styles.search} onChangeText={(text)=>{let filteredData=this.searchData(text)
                        this.setState({Data:filteredData})
                        }}></TextInput>
                      </View>
                        {/* <ScrollView>
                            {this.state.Data.map((item,index) => this.renderMyItem(item,index))}
                        </ScrollView> */}
                        <FlatList
                            data={this.state.Data} 
                            renderItem={({item}) => (
                            this.renderMyItem(item,item.id)
                            )}/>
                        <TouchableOpacity onPress={() => {
                            this.setState({ Data: [...this.state.Data, this.addItem()] })
                            console.log(this.state.Data)
                        }} style={styles.buttonPlace}>
                            <Image source={require('./assets/images/plus.png')} style={styles.btn} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#E9E5E5',
        flex: 1,
    }, innerParent: {
        flex: 1,
        margin: 1,
    },
    header: {
        justifyContent: 'space-around',
        height: 35,
        backgroundColor: '',
        alignItems: 'center',
        backgroundColor: '#323030',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        borderRadius: 30,
        marginLeft: '25%',
        marginRight: '25%',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
    },
    textBlock: {
        flex: 1,
        margin: 20,
        borderRadius: 30,
        backgroundColor: '#E9E5E5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    innerTextBlock: {
        justifyContent: 'space-between',
        margin: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        color: 'black',
        justifyContent: 'space-around'
    },
    btn: {
        height: 50,
        width: 50,
    },
    images: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10
    },
    buttonPlace: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    dlt: {
        height: 20,
        width: 20,
        // position: 'absolute',
        // bottom: 0
    },
    search:{
      fontSize:20,
      // width:350,
      height:40,
      marginTop:10,
      borderColor:"black",
      borderWidth:2,
      borderRadius:20,
    //   marginLeft:20,
      // marginRight:20,
    }
})





{/* <View style={styles.thirdInnner}>
                            <View style={styles.fourthParent} />
                        </View> */}

{/* <View style={styles.thirdInnner}/> */ }

{/* </View> */ }
{/* <ScrollView>
            {
             student.map(item=>this.renderMyItem(item))
            }
            </ScrollView> */}


            // <FlatList
            //                 data={this.state.Data} 
            //                 renderItem={({item}) => (
            //                 this.renderMyItem(item,item.id)
            //                 )}/>