import React from "react";
import { useState } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { styles2 } from "../styles";


function ButtonComponent(props) {
    return(
        <TouchableOpacity
        onPress={props.func}
        style={props.style}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

function CounterApp() {

    const [counter, setCounter] = useState(0);

    function buttonPressedIncrement() {
        setCounter(counter + 1);
    }

    function buttonPressedDecrement() {
        setCounter(counter - 1);
    }

    return (
        <SafeAreaView>
            <Image 
            source={{uri: "https://reactnative.dev/img/logo-og.png"}}
            style={{height: 150,
            marginHorizontal: 10,
            borderRadius:10,
            marginTop:4,

            }}/>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, marginVertical: 8}}>Hi!</Text>
            </View>
            <View style={styles2.buttonContainer}>
                <ButtonComponent title="Increment" func={buttonPressedIncrement} style={styles2.buttonStyle}></ButtonComponent>
                <ButtonComponent title="Decrement" func={buttonPressedDecrement} style={styles2.buttonStyle}></ButtonComponent>
            </View>
            

            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, marginVertical: 8}}>{counter}</Text>
            </View>

        </SafeAreaView>       
    )
}

export default CounterApp;