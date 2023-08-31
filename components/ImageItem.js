import React, { useState } from "react";
import { View, Image, ActivityIndicator } from 'react-native';
import { useEffect } from "react";

function ImageItem(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Yes")
    }, [loading])

    function onLoading(value) {
        setLoading(value);
    }

    /* return (
        <View style={{ width: '100%', aspectRatio: props.aspectRatio }}>
            {loading ?
                <View style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center', width: '100%', height: '100%' }}>
                    <ActivityIndicator size='large'></ActivityIndicator>
                </View>
                :
                <Image style={{ height: '100%', width: '100%', borderRadius: 8, }}
                    source={{ uri: props.sourceURL }}
                    onLoadStart={() => onLoading(true)}
                    onLoadEnd={() => onLoading(false)}
                />

            }

        </View>
    ); */

    return (
        <View style={{ width: '100%', aspectRatio: props.aspectRatio }}>
            {loading &&
                <View style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center', width: '100%', height: '100%' }}>
                    <ActivityIndicator color="blue"></ActivityIndicator>
                </View>
            }

            {
                <Image style={{ height: '100%', width: '100%', borderRadius: 8, }}
                    source={{ uri: props.sourceURL }}
                    onLoadStart={() => onLoading(true)}
                    onLoadEnd={() => onLoading(false)}>
                </Image>
            }

        </View>
    );

}

export default ImageItem;