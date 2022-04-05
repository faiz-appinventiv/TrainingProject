import { Text, View, SafeAreaView, SectionList, TextComponent } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class Demo2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        APIdata:[],
      }
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94116c2f326848febdba9ec9b3f09924').then(res=>{
        //     this.setState({APIdata:res.data.articles.map(item=>{
        //         return {title:item.source.name, description:item.description,url:item.url,urlToImage:item.urlToImage,content:item.content}
        //     })})
        // console.log(this.state.APIdata)
        // })
                console.log(this.state.APIdata)
                this.setState({title: this.state.APIdata.map((item)=>{
                    if(this.state.title.includes(item.source.name)){
                        return
                    }else
                    this.state.title.push(item.source.name)
               })})
                console.log(this.state.title)
                console.log(this.state.title.length)
            })
        //     // console.log(res.data)
        .catch(err=>{
            console.log(err)
        })
    }
    // formatData =() => {
    //     // this gives an object with dates as keys
    //     if (data.length == 0) return [];
    //     console.log('data',this.state.APIdata)
    //     const groups = this.state.APIdata.reduce((groups, item) => {
    //       console.log('groups_item',groups,item)
    //       const name = item.type;
    //       if (!groups[name]) {
    //         groups[name] = [];
    //       }
    //       groups[name].push(item);
    //       return groups;
    //     }, {});
    
    //     console.log('groups',groups)
    
    //     // Edit: to add it in the array format instead
    //     const groupArrays = Object.keys(groups).map(date => {
    //       console.log('name',name);
    //       return {
    //         date,
    //         data: groups[date],
    //       };
    //     });
    //     console.log('Here',groupArrays )
    //     return groupArrays;
    //   }, []);
    

    renderMyItem=(item)=>{
        console.log('item',item);
        return(<View>
            <Text>
            {"hello"}
            </Text>
            </View>)
    }
    renderSectionHeader=()=>{
        return(<View><Text>
            {"header"}
            </Text></View>)

    }
  render() {
    //   console.log('api : ',this.state)
    return (
      <SafeAreaView>
          <View>
            <SectionList
                sections={[{title:this.state.APIdata.title, data:this.state.APIdata}]}
                renderItem={({item})=>{
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                }}
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