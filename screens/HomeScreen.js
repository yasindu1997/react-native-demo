import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import FABExample from '../components/FABExample'

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text> Home </Text>
                <Button 
                title="Go To Login"
                color="#e74c3c"
                />
            </View>
        )
    }
}
