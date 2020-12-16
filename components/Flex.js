import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={{top:10}}>IJSE</Text>
                </View>
                <View style={styles.view2}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    view1: {
        flex: 1,
        backgroundColor: '#3498db',
        position:'relative',
    },
    view2: {
        flex: 2,
        backgroundColor: '#e67e22'
    }
})
