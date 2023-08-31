import React from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Game } from './Screens/TicGame.js'
import { AxiosExercise } from "./Screens/AxiosExercise.js";
import CounterApp from "./Screens/CounterApp.js";
import ToDoApp from "./Screens/ToDoApp.js";
import { styles2 } from "./styles.js";
import CatDetail from "./Screens/CatDetail.js";

const Home = ({ navigation }) => {
    return (
        <View style={styles2.buttonContainer}>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Counter App")
                }}
                style={styles2.buttonStyle}>
                <Text>Counter App</Text>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("To Do App")
                }}
                style={styles2.buttonStyle}>
                <Text>To Do App</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Tic Tac Toe Game")
                }}
                style={styles2.buttonStyle}>
                <Text>Tic Tac Toe Game</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Cat API")
                }}
                style={styles2.buttonStyle}>
                <Text>Cat API</Text>
            </TouchableOpacity>

        </View>
    );
}

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Apps" component={Home} />
            <Stack.Screen name="Counter App" component={CounterApp} />
            <Stack.Screen name="To Do App" component={ToDoApp} />
            <Stack.Screen name="Tic Tac Toe Game" component={Game} />
            <Stack.Screen name="Cat API" component={AxiosExercise} />
            <Stack.Screen name="Cat Detail" component={CatDetail} />
        </Stack.Navigator>


    );
}

const Home2 = () => {
    return (
        <SafeAreaView>
            <Image
                source={{ uri: "https://reactnative.dev/img/logo-og.png" }}
                style={{
                    height: 150,
                    marginHorizontal: 10,
                    borderRadius: 10,
                    marginTop: 4,

                }} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, marginVertical: 8 }}>Welcome to My App!</Text>
            </View>

        </SafeAreaView>
    );
}

const Tabs = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={Home2} />
                <Tabs.Screen name="Ap" component={AppStack} options={{ headerShown: false, title: 'Apps' }} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default App;

