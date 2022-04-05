import { Text, View, SafeAreaView, SectionList, StyleSheet, ImageBackground ,Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

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

    async componentDidMount() {
        try {
            let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fbf00df3b68411b94db8551eda96a2d')
            // console.log("DidMount",this.state.APIdata)
            this.setState({
                APIdata: res.data.articles.map(item => {
                    return {
                        name: item.source.name,
                        description: item.description,
                        title: item.title,
                        urlToImage: item.urlToImage,
                        content: item.content,
                        author: item.author,
                        url:item.url
                    }
                })
            })
            // this.setState({title: this.state.APIdata.map((item)=>{
            //     if(this.state.title.includes(item.source.name)){
            //         return
            //     }else
            //     this.state.title.push(item.source.name)
            // })})
            // console.log(this.state.title)
            // console.log(this.state.title.length)
            // })
            // console.log(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    formatData =()=>{ 
        return (this.state.APIdata.reduce((accum, current) => {
        // console.log("inside reduce",accum,current)
        let group = accum.find(x => x.name === current.name);
        if (!group) {
            group = { name: current.name, data: [] }
            accum.push(group);
        }
        group.data.push(current);
        return accum;
    }, []))
}

    // formatData = React.useMemo(() => {
    //     // this gives an object with dates as keys
    //     if (data.length == 0) return [];
    //     console.log('data',data)
    //     const groups = data.reduce((groups, item) => {
    //       console.log('groups_item',groups,item)
    //       const date = item.type;
    //       if (!groups[date]) {
    //         groups[date] = [];
    //       }
    //       groups[date].push(item);
    //       return groups;
    //     }, {});

    //     console.log('groups',groups)

    //     // Edit: to add it in the array format instead
    //     const groupArrays = Object.keys(groups).map(date => {
    //       console.log('date',date);
    //       return {
    //         date,
    //         data: groups[date],
    //       };
    //     });
    //     console.log('Here',groupArrays )
    //     return groupArrays;
    //   }, [data]);

a=2
btn='Read More'
readMore=()=>{
    // console.log("Inside BTN")
    if(this.a==2){
        this.a=null
        this.btn='Read Less'
    }
    else{
        this.a=2
        this.btn='Read More'
    }
        // this.forceUpdate()
        this.setState({})
}


    renderItem = (item) => {
        return (
            <ImageBackground source={{uri:item.urlToImage}} resizeMode='cover' resizeMethod='resize' style={styles.newsBlock} blurRadius={9}>
                <View>
                    <Image source={{uri:item.url}}/>
            <Text style={[styles.text,{color:'#1A1A1A'}]}>
                {item.author}
            </Text>
            <Text numberOfLines={this.a}  style={styles.text}>
                {item.description}
            </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                this.readMore()
            }}>
                <Text style={styles.readBtn}>{this.btn}</Text>
            </TouchableOpacity>
            </ImageBackground>
        )
    }
    renderSectionHeader = (section) => {
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.headerText}>
                    {section.name}
                </Text>
            </View>
        )
    }

    render() {
        console.log("hel",this.formatData())
        // console.log('inside render', this.state.APIdata)
        console.log('hell',this.formatData())
        return (
            <SafeAreaView style={styles.container}>
                {/* <Text style={styles.header}>{"Breaking News"}</Text> */}
                    <SectionList
                        sections={this.formatData()}
                        renderItem={({ item }) => (this.renderItem(item))}
                        renderSectionHeader={({ section }) => (this.renderSectionHeader(section))}
                        // renderSectionFooter={({section})=>(
                        //     <View>
                        //     <Text>{section.author}</Text>
                        //     </View>)
                        // }
                        ListEmptyComponent={(<View style={styles.empty}><Text style={styles.emptyText}>{'LOADING...'}</Text></View>)}
                    />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1A1A1A'
    },
    text: {
        color: 'white',
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        fontSize:15,
        fontWeight:'900',
    },
    header:{
        // backgroundColor:'#1A1A1A',
        color:'white',
        alignSelf:'center',
        fontSize:30,
        fontWeight:'900'
    },
    sectionHeader:{
        backgroundColor:"#1A1A1A",
        // opacity:0.1,

    },
    headerText: {
        color: 'white',
        fontSize: 30,
        // opacity:1,
    },
    newsBlock: {
        // height:150,
        paddingBottom:40,
        marginTop:10,
        margin: 2,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor:'white'
        
    },
    empty:{
        flex:1,
        // marginTop:20,
        backgroundColor:'#1A1A1A',
        alignItems:'center',
        justifyContent:'center'
    },
    emptyText:{
        // margin:200,
        alignSelf:'center',
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        justifyContent:'center'
    },
    readBtn:{
        color: '#868585',
        marginRight:10,
        marginLeft:10,
        marginBottom:10,
        fontSize:15,
        fontWeight:'900',
    }
})