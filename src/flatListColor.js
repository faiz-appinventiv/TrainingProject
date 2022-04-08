import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop:35,
        backgroundColor: '#beb8ef'
    },
    formContainer: {
        // flex: 0.3,
        height:300,
        padding: 10,
        // paddingVertical:50,
        border: 1,
        // margin: 10,
        // borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#f5f4fc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        // justifyContent:'center',
    },
    modalContainer: {
        flex:1,
        justifyContent: "flex-end",
        // height:'30%',
        backgroundColor:'rgba(255, 255, 255, .3)',
        // marginBottom:10,
        marginBottom:'5%',
    },
    
    inputBlock: {
        paddingLeft: 10,
        borderColor: '#B7CADB',
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 10,
        height: '30%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        color: 'black'
    },
    addButton: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        borderRadius: 5,
        padding: 5,
    },
    errorMessage: {
        fontSize: 10,
        color: 'red'
    },
    list: {
        // flex: 1,
        height:700,
        padding: 10,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#f5f4fc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    listTag: {
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
        borderRadius: 5,
        color: 'white'
        // width:'100%',
        // justifyContent:'center'
    },
    header: {
        backgroundColor: '#8d83e3',
        // borderRadius: 5,
        // marginLeft: 10,
        // marginRight: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        padding: 5
    },
    studentBlock: {
        // flex: 1,
        // height:900, 
        padding: 10,
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        borderColor: '#DEDDDB',
        backgroundColor: '#efeefb',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    deleteImage: {
        height: 14,
        width: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    listText: {
        color: 'black'
    },
    emptyList: {
        alignItems: 'center',
    },
    editButton: {
        height: 15,
        width: 15,
    },
    editButtonTochable: {
        position: 'absolute',
        right: 6,
        bottom: 4,
        activeOpacity: 0.8
    }
})
 export default styles