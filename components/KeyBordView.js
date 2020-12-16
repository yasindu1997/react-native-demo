import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'

export default class KeyBordView extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <Image
                    source={require('../assets/Angular.png')}
                    style={{ width: 200, height: 200 }}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Confim password"
                    style={styles.textInput}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        backgroundColor: '#ffff',
        marginHorizontal: 10,
        marginVertical: 5,
        width: 300
    }
})
