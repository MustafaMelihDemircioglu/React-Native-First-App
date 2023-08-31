import React from 'react';
import { Text, TouchableOpacity, Dimensions, SafeAreaView, View, StyleSheet, Button, Alert, ActivityIndicator, FlatList, Image } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { appStyles } from '../styles';
import  CatDetail  from './CatDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const baseUrl = 'https://api.thecatapi.com/v1/breeds';
const token = 'live_TR2UAnkPtMEtlUV1gl7I8zWG6o0oxPnRdRMMgWVlE1CE5c0WUA512gdbXWzcKf00'

function AxiosExercise({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const getData = async () => {
        setIsLoading(true);
        try {
            const resp = await axios.get(`${baseUrl}`, {
                headers: {
                    'x-api-key': token
                }
            });
            setIsLoading(false);
            setData(resp.data);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    const header = () => {
        return (
            <View>
                <Text style={styles.title}>Cat Breeds</Text>
            </View>
        );
    };

    const GetContent = () => {
        if (isLoading) {
            return (
                <SafeAreaView style={styles.container}>
                    <ActivityIndicator size='large' />
                </SafeAreaView>
            );
        }
        return (
            <SafeAreaView style={{marginHorizontal: 16}}>
                <FlatList ListHeaderComponent={header}
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("Cat Detail", data[index])}>
                            <View style={{ borderBottomWidth: 0.5 }}>
                                <Text style={appStyles.taskText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>}
                />
            </SafeAreaView>
        );
    }

    return (
        <GetContent />
    );
}

export { AxiosExercise };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        marginVertical: 12,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    gameBoard: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    boxContainer: {
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    message: {
        fontSize: 24,
        marginVertical: 12,
    },
});