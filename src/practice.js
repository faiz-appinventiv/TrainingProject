import React, {Component} from 'react';
import {BackHandler, View, Dimensions, Animated, TouchableOpacity, Text} from 'react-native';

let {width, height} = Dimensions.get('window');


export default class App extends Component {

    state = {
        backClickCount: 0
    };
    
    constructor(props) {
        super(props);

        this.springValue = new Animated.Value(100) ;

    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    _spring() {
        this.setState({backClickCount: 1}, () => {
            Animated.sequence([
                Animated.spring(
                    this.springValue,
                    {
                        toValue: -.15 * height,
                        friction: 5,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.springValue,
                    {
                        toValue: 100,
                        duration: 300,
                        useNativeDriver: true,
                    }
                ),

            ]).start(() => {
                this.setState({backClickCount: 0});
            });
        });

    }


    handleBackButton = () => {
        this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

        return true;
    };


    render() {

        return (
            <View style={styles.container}>
                <Text>
                    container box
                </Text>

                <Animated.View style={[styles.animatedView, {transform: [{translateY: this.springValue}]}]}>
                    <Text style={styles.exitTitleText}>press back again to exit the app</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => BackHandler.exitApp()}
                    >
                        <Text style={styles.exitText}>Exit</Text>
                    </TouchableOpacity>

                </Animated.View>
            </View>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    animatedView: {
        width,
        backgroundColor: "#0a5386",
        elevation: 2,
        position: "absolute",
        bottom: 0,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    exitTitleText: {
        textAlign: "center",
        color: "#ffffff",
        marginRight: 10,
    },
    exitText: {
        color: "#e5933a",
        paddingHorizontal: 10,
        paddingVertical: 3
    }
};
