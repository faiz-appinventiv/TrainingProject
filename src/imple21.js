import React, {useReducer} from "react";
import { View ,Text, TouchableOpacity, SafeAreaView} from "react-native";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "toggleShowText":
            return {...state, showText: !state.showText};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <SafeAreaView>
            <Text>{state.count}</Text>
            <TouchableOpacity onPress={() => {
                dispatch({ type: 'INCREMENT' });
                dispatch({ type: 'toggleShowText' });
            }}><Text>{"Click Here"}</Text>
            </TouchableOpacity>
            {state.showText && <Text>{"This is a Text"}</Text>}
        </SafeAreaView>
    )
};

export default UseReducer;