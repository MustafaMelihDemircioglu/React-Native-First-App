import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, StyleSheet, ActivityIndicator, FlatList, TextInput, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { appStyles } from '../styles';
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { Keyboard } from 'react-native';

const baseUrl = 'https://api.api-ninjas.com/v1/cats?name=';
const token = 'jGSwxCOU/NEA27+F8LCXLw==r1LDkxH3rPCV59u3'

const pressHandler = () => {
    Keyboard.dismiss();
}

const DismissKeyboard = ({ children, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        {children}
    </TouchableWithoutFeedback>
);

function CatSearch({ navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [isTapped, setIsTapped] = useState(0)
    const [data, setData] = useState(null)
    const [text, setText] = useState("");
    const [beginSearching, setBeginSearching] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        try {
            const resp = await axios.get(`${baseUrl}${text}`, {
                headers: {
                    'X-Api-Key': token
                }
            });
            setData(resp.data);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        if (isTapped > 0) {
            getData();
        }
    }, [isTapped])

    useEffect(() => {
        if (text.length > 3) {
            getData();
            setBeginSearching(true);
        }
        else {
            setBeginSearching(false);
        }
    }, [text])

    const searchButtonPressed = () => {
        setIsTapped(isTapped + 1);
    }

    const searchIconPressed = () => {
        setIsTapped(isTapped + 1);
        Keyboard.dismiss();
    }

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

        if (isTapped == 0 && !beginSearching) {
            return null;
        }

        return (

            <FlatList ListHeaderComponent={header}
                data={data}
                renderItem={({ item, index }) =>
                    <View style={{ borderBottomWidth: 0.5, marginHorizontal: 8 }}>
                        <Text style={appStyles.taskText}>{item.name}</Text>
                    </View>
                }
            />

        );
    }

    return (
        <DismissKeyboard onPress={pressHandler}>
            <SafeAreaView style={appStyles.safeArea}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput style={appStyles.inputWithSearchButton}
                        placeholder="Enter your text here"
                        onChangeText={(myText) => setText(myText)}
                        returnKeyType='search'
                        onSubmitEditing={searchButtonPressed}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center', padding: 4 }}
                        onPress={searchIconPressed}
                    >
                        <FontistoIcon name="search"
                            size={25}
                            color="#007AFF"
                            style={{ alignSelf: 'center' }}
                        ></FontistoIcon>
                    </TouchableOpacity>

                </View>
                <GetContent />
            </SafeAreaView>
        </DismissKeyboard>
    );

    /* const header = () => {
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
    ); */
}

export default CatSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        marginVertical: 12,
        marginHorizontal: 8,
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