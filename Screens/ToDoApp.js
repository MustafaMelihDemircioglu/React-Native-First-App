import React from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { appStyles as styles } from "../styles";

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
            onChangeText={(myText) => setText(myText)}
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

export default ToDoApp;