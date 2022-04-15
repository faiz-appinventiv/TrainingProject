import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop:'10%'
    },
    search: {
        borderRadius: 5,
        marginTop: '10%',
        padding: 10,
        margin: 6,
        marginLeft: '3%',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: "85%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    searchBar: {
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 18,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '800',
    },
    header: {
        backgroundColor: '#70feff',
        flexDirection: 'row'
    },
    searchImage: {
        height: 20,
        width: 20,
    },
    micIcon: {
        opacity: 0.9,
        height: 23,
        width: 23,
    },
    micTouchable: {
        position: 'absolute',
        right: 10,
        marginTop: "12%",
    },
    scanImage: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 10,
        top: 10,
        opacity: 0.5
    },
    addressBar: {
        backgroundColor: '#d2fefe',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    addressText: {
        marginLeft: '3%'
    },
    imgSliderView: {
        marginTop: "1%",
    },
    productImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    productSlide: {
        // height: 250,
        marginTop: 20,
        marginLeft: 10,
    },
    product: {
        width: 160,
        // height:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    productLikeHeader: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: '600',
        marginLeft: 10,
    },
    loading: {
        height: 20,
        width: 70,
        // alignSelf: 'center',
        // justifyContent:'center'
    },
    SearchHeader: {
        height: 125,
    },
    productPage: {

    },
    backButton: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    backButtonTouchable: {
        position: 'absolute',
        top: 48,
        left: 5
    },
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 150
    }
})

export default styles