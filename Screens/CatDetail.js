import React from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, Image, ActivityIndicator } from "react-native";
import { appStyles as styles } from "../styles";
import { useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';

const loadingComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size='large' />
        </SafeAreaView>
    );
}

function CatDetail({ route, navigation }) {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)

    const details = route.params;

    navigation.setOptions({
        title: details.name,
    });



    return (
        <SafeAreaView style={styles.safeArea}>
            <Image
                source={{ uri: details.image.url }}
                style={{
                    width: '100%',
                    aspectRatio: details.image.width/details.image.height,
                    borderRadius: 10,
                    marginTop: 16,
                }} 
                loadingIndicatorSource={require("../assets/cupertino_activity_indicator.gif")}/>
        </SafeAreaView>
    );
}

export default CatDetail;