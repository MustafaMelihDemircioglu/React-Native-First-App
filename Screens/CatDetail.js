import React from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import { appStyles as styles } from "../styles";
import { useEffect } from "react";
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress';

const INDICATORS = [undefined, Progress.Bar, Progress.Circle, Progress.Pie];


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

                <Image
                    source={{ uri: details.image.url }}
                    style={{
                        width: '100%',
                        aspectRatio: aspectRatioValue,
                        borderRadius: 10,
                    }}
                    indicator={ProgressBar} 
                />

                <View style={{ flexDirection: 'row' }}>
                    <Text>hey</Text>
                    <Text>ho</Text>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}

export default CatDetail;