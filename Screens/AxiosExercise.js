import React from 'react';
import { Text, TouchableOpacity, Dimensions, SafeAreaView, View, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';


function AxiosExercise() {
    return (
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginVertical: 12,
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

export { AxiosExercise };