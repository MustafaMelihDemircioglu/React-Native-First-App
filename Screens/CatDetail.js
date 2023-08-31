import React from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, ActivityIndicator, Dimensions, ScrollView, Image } from "react-native";
import { appStyles as styles } from "../styles";
import { useEffect } from "react";
import ImageItem from "../components/ImageItem";

function CatDetail({ route, navigation }) {

    const details = route.params;

    const aspectRatioValue = details.image.width / details.image.height

    /* navigation.setOptions({
        title: details.name,
    }); */

    /* useEffect(() => {
        // Set the header title for Screen 3 immediately
        navigation.setOptions({
          title: details.name,
        });
      }, []); */

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 8,
                }}>
                    {details.name}
                </Text>

                <ImageItem aspectRatio={aspectRatioValue} sourceURL={details.image.url}></ImageItem>

                <View style={{ flexDirection: 'row' }}>
                    <Text>hey</Text>
                    <Text>ho</Text>
                </View>

                

            </ScrollView>
        </SafeAreaView >
    );
}

export default CatDetail;