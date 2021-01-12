import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loding() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>잠자코 기다려라</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA'
    },

    text: {
        color: "#2c2c2c",
        fontSize: 25
    }
});