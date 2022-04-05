import { Text, View,StyleSheet, SectionList, SafeAreaView,Image, ImageBackground} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'


export default class apiSectionlist extends Component {
    constructor(props){
        super(props)

    this.state={APIdata:[]}


    
      

    }
    
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94116c2f326848febdba9ec9b3f09924').then(response=>{
            this.setState({APIdata:response.data.articles.map(item=>{return({title:item.source.name, desc:item.description, img:item.urlToImage,url:item.url})})})
            //
            console.log(this.state.APIdata)
        }).catch(err=>{
            console.log(err)
        })
    }
     
    render(){
     
        return(
            <SafeAreaView>
                <View>
                    <SectionList
                   sections={[{title:this.state.APIdata.title, data:this.state.APIdata, image:this.state.APIdata}]}
                   keyExtractor={(item, index) => item + index}
                   renderItem={({ item }) => 
                   (<View style={styles.block}>
                       <ImageBackground source={{uri:item.urlToImage}}>
                       <Image source={{uri:item.img}} style={{height:40, width:40,borderRadius:20}}/>
                       <Image source={{uri:item.url}} style={{height:40, width:40,borderRadius:20}}/>
                       <Text style={{marginBottom:5}}>{item.title}</Text>
                       <Text>{item.desc}</Text>
                       </ImageBackground>
                       
                       
                   </View>)}
                   renderSectionHeader={({section})=>(
                       <View>
                           <Text>{section.title}</Text>
                           
                       </View>
                   )}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
 
const styles = StyleSheet.create({
    block:{
        margin:10, 
        backgroundColor:'white',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
    }
})