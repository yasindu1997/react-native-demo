import React, { Component } from 'react'
import { Alert, Button, Text, View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class CoreComponents extends Component {
    state = {
        data: ''
    }

    getName() {
        console.log("Hello IJSE")
    }

    render() {
        return (
            <View>
                <Text>Hello</Text>

                <Button
                    title="Click Me"
                    color="red"
                    onPress={this.getName}
                    style={styles.btn}
                />

                <TextInput
                    placeholder="Enter your name" //prop
                    value={this.state.data}
                    onChangeText={(value) => {
                        this.setState({ data: value })
                        console.log(value)
                    }
                    }
                />

                <Image
                    source={require('../assets/Angular.png')}
                    style={styles.img}
                />

                <Text style={styles.text}>Hello React</Text>

                <TouchableOpacity style={styles.customBtn}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30
    },
    img: {
        height: 200,
        width: 200
    },
    btn: {
        width: 100
    },
    customBtn: {
        backgroundColor: '#2ecc71',
        width: 200,
        height: 25
    }
})
