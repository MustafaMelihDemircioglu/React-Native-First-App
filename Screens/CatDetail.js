import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { Text, View, TextInput, FlatList, SafeAreaView, ActivityIndicator, Dimensions, ScrollView, Image, StyleSheet } from "react-native";
import { appStyles as styles } from "../styles";
import { useEffect } from "react";
import ImageItem from "../components/ImageItem";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-reanimated-table';

function CatDetail({ route, navigation }) {

    const details = route.params;

    let aspectRatioValue = 3/2;
    let imageURL;
    let notAvaliable = true;

    if ("image" in details) {
        aspectRatioValue = details.image.width / details.image.height;
        imageURL = details.image.url;
        notAvaliable = false;
    }

    const tableHead = ['Characteristics', 'Rating'];

    const tableTitle = ['Adaptability', 'Affection Level', 'Child Friendly', 'Energy Level', 'Grooming', 'Health Issues', 'Intelligence'];

    const tableData = [[details.adaptability], [details.affection_level], [details.child_friendly], [details.energy_level], [details.grooming], [details.health_issues], [details.intelligence]]

    /* navigation.setOptions({
        title: details.name,
    }); */

    useLayoutEffect(() => {
        // Set the header title for Screen 3 immediately
        navigation.setOptions({
            title: details.name,
        });
    }, []);

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

                <ImageItem aspectRatio={aspectRatioValue} sourceURL={imageURL} notAvaliable={notAvaliable}></ImageItem>

                <View style={styles3.container}>
                    <Table borderStyle={{ borderWidth: 1 }} >
                        <Row data={tableHead} style={styles3.head} textStyle={styles3.text} flexArr={[1, 1]} />
                        <TableWrapper style={styles3.wrapper}>
                            <Col data={tableTitle} style={styles3.title} textStyle={styles3.text} />
                            <Rows data={tableData} style={styles3.row} textStyle={styles3.text} flexArr={[1]} />
                        </TableWrapper>
                    </Table>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default CatDetail;

const styles3 = StyleSheet.create({
    container: { flex: 1, paddingTop: 16 },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' }
});