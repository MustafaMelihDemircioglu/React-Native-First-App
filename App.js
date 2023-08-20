import React from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appStyles as styles } from "./styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ToDoApp () {
    const [text, setText] = useState("");

    const [tasks, setTasks] = useState([]);

    const handleAddTaskPress = () => {
        setTasks([...tasks, text]);
        setText("");
    }

    const handleDeleteTaskPress = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    showTasks = () => {
        console.log(tasks);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

            <Text style={styles.title}>
                My Tasks ({text})
            </Text>

            <Text style={styles.subtitle}>
                Enter your tasks below and press add button.
            </Text>

            <TextInput style={styles.input} 
            placeholder="Enter your text here" 
            onChangeText={setText}
            value = {text}
            />   
            
            <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => handleAddTaskPress()}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>

            <View style={styles.divider}/>

            <FlatList 
                data={tasks}
                renderItem={({item, index}) => 
                <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item}</Text>
                <TouchableOpacity 
                style={styles.taskDelete} 
                onPress={() => handleDeleteTaskPress(index)}
                >
                    <Text style={styles.taskDeleteText}>Delete</Text>
                </TouchableOpacity>
                </View>}
            />

            <TouchableOpacity 
            style={{backgroundColor:"lightblue"}}
            onPress={showTasks}
            >
                <Text >Show Tasks</Text>
            </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

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
        </View>
    );
}

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
    
        <Stack.Navigator screenOptions={{ headerTitle: 'Apps' }}>
            <Stack.Screen name="Apps" component={Home} />
            <Stack.Screen name="Counter App" component={CounterApp} />
            <Stack.Screen name="To Do App" component={ToDoApp} />
        </Stack.Navigator>

    
    );
}

const Home2 = () => {
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
                <Text style={{fontSize: 16, marginVertical: 8}}>Welcome to My App!</Text>
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
                <Tabs.Screen name="Ap" component={AppStack} options={{headerShown: false, title: 'Apps'}}/>
            </Tabs.Navigator>
        </NavigationContainer>
    );
}


export default App;

const styles2 = StyleSheet.create({

    buttonContainer: {
        margin: 10,
        justifyContent: "space-evenly",
        flexDirection: "row"
    },

    buttonStyle: {
        margin: 8,
        borderRadius: 4,
        backgroundColor: "lightblue",
        paddingVertical: 16,
        paddingHorizontal: 32,
    }

    }
)