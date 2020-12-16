import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
    }

    saveData() {
        try {
            AsyncStorage.setItem("user", "log")
            console.log("Saved")
        } catch (error) {
            console.log("Something went wrong")
        }
    }

    getData() {
        AsyncStorage.getItem('user').then((value) => {
            console.log(value)
        })
    }

    removeData() {
        try {
            AsyncStorage.removeItem('user')
            console.log("removed")
        } catch (error) {
            console.log("Failed")
        }
    }

    render() {
        return (
            <View>
                <Text> Login Screen </Text>
                <Button
                    title="Go to Home"
                    color="#2ecc71"
                    onPress={() => { this.props.navigation.navigate('Home') }}
                />
                <Button
                    title="Save Data"
                    color="#e67e22"
                    onPress={this.saveData}
                />
                <Button
                    title="Load Data"
                    color="#16a085"
                    onPress={this.getData}
                />
                <Button
                    title="Remove Data"
                    color="#16a085"
                    onPress={this.removeData}
                />
            </View>
        )
    }
}
