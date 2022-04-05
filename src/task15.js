import { Text, View, SafeAreaView, SectionList, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Demo2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            APIdata: [],
        }
    }

    // formatData=()=>{
    //     if(this.state.APIdata.length()==0) 
    //     return[]

    // }

    componentDidMount() {
        this.setState({
            APIdata: [
                {
                    title: { key: '1', value: 'Main Course', description: 'test demo testing1' },
                    data: ["Pizza", "Burger", "Risotto"]
                },
                {
                    title: { key: '1', value: "Sides", description: 'test demo testing2' },
                    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                },
                {
                    title: { key: '1', value: "Drinks", description: 'test demo testing3' },
                    data: ["Water", "Coke", "Beer"]
                },
                {
                    title: { key: '1', value: "Desserts", description: 'test demo testing4' },
                    data: ["Cheese Cake", "Ice Cream"]
                }
            ]
        })
    }

    addItem = () => {
        // console.log("Value",value)
        let p=0
        const newItem = {
            title: { key: '1', value: "Shakeronies", description: 'test demo testing4' },
            data: ["Cheese Cake", "Ice Cream"]
        }
        for (let i = 0; i < this.state.APIdata.length; i++) {
            if (this.state.APIdata[i].title.value === newItem.title.value) {
                this.state.APIdata[i].data = [...this.state.APIdata[i].data, ...newItem.data]
                p=-1
                this.setState({})
                break
            }
        }
        if(p==0){
            this.state.APIdata.push(newItem)
        this.setState({})
        }

    }
    deleteItem=(value)=>{
        console.log('Value',value)
        // console.log(this.state.APIdata[1].data.findIndex((element)=>element===value))
        for (let i = 0; i < this.state.APIdata.length; i++) {
            if(this.state.APIdata[i].title.value===value.section.title.value){
                this.state.APIdata[i].data.splice(value.index,1)
                // this.setState({})
                // console.log(this.state.APIdata.findIndex((element)=>element.title.value===value.section.title.value))
            if(this.state.APIdata[i].data.length==0){
                this.state.APIdata.splice(this.state.APIdata.findIndex((element)=>element.title.value===value.section.title.value),1)
            }
            this.setState({})
        }


        //     for(let j=0;j<this.state.APIdata[i].data.length;j++)
        //     if (this.state.APIdata[i].data[this.state.APIdata.findIndex((element)=>element===value)] === value) {
        //         this.state.APIdata[this.state.APIdata.findIndex((element)=>element.title.value===value)].data.splice(this.APIdata)
        //         if(this.state.APIdata[this.state.APIdata.findIndex((element)=>element.title.value===value)].data.length==0)
        //             this.state.APIdata.splice(this.state.APIdata.findIndex((element)=>element.title.value===value),1)
        //         this.setState({})
        //         console.log(this.state.APIdata)
        //         break
        //     }
        }
    }

    renderItem = (item) => {
        // console.log(item)
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.text}>
                    {item.item}
                </Text>
                <Text style={styles.deleteText} onPress={() => this.deleteItem(item)}>{"Delete"}</Text>
            </View>
        )
    }
    renderSectionHeader = (section) => {
        return (
            <View style={styles.sectionHeader}>
                <View>
                    <Text style={styles.headerText}>
                        {section.title.value}
                    </Text>
                </View>
                <View>
                    <Text style={[styles.headerText, { fontSize: 15, alignSelf: 'flex-end' }]}>{section.title.description}</Text>
                </View>
            </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{color:'white',fontSize:30,fontWeight:'700',alignSelf:'center'}}>{"MENU"}</Text>
                <SectionList
                    sections={this.state.APIdata}
                    renderItem={(item) =>{
                        // console.log(item)
                       return (this.renderItem(item))
                    } }
                    renderSectionHeader={({ section }) => (this.renderSectionHeader(section))}
                    ListEmptyComponent={(<View style={styles.empty}><Text style={styles.emptyText}>{'List is Empty'}</Text></View>)}
                    keyExtractor={(item, index) => { return index }}
                />
                <Text style={[styles.headerText,{color:'white'}]} onPress={() => this.addItem()}>{"Add More"}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    text: {
        alignSelf: 'center',
        color: 'black',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: '900',
    },
    header: {
        // backgroundColor:'#1A1A1A',
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '900'
    },
    sectionHeader: {
        borderRadius:20,
        backgroundColor: "aqua",
        marginTop: 30
        // opacity:0.1,
    },
    headerText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 30,
        // opacity:1,
    },
    empty: {
        flex: 1,
        // marginTop:20,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        // margin:200,
        alignSelf: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    itemContainer:{
        backgroundColor:'white',
        margin:1,
        borderRadius:20,
        alignItems:'center'
    },
    deleteText:{
        alignSelf:'flex-end',
        marginRight:20
    }
})