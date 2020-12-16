import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, Alert } from 'react-native'

export default class Fetch extends Component {
    constructor() {
        super()
        this.state = {
            cusId: '',
            cusName: '',
            cusAddress: '',
            cusSalary: ''
        }
    }

    saveCustomer = () => {
        var data = new Headers();
        data.append('Accept', 'application/json')
        data.append('id', this.state.cusId)
        data.append('name', this.state.cusName)
        data.append('address', this.state.cusAddress)
        data.append('salary', this.state.cusSalary)

        return fetch('http://192.168.1.103:3000/customer', {
            method: 'POST',
            headers: data
        }).then((response) => response.json()).then((resp) => {
            if (resp.affectedRows > 0) {
                Alert.alert('Customer Added')
            }
        }).catch((errr) => {
            console.log("Failed")
        })
    }

    getDate() {
        return fetch('http://192.168.1.103:3000/customer', {
            method: 'GET',
        }).then((response) => response.json()).then((customers) => {
            console.log(customers)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Customer Form </Text>
                <TextInput
                    placeholder="Customer ID"
                    style={styles.textInput}
                    value={this.state.cusId}
                    onChangeText={(value) => {
                        this.setState({
                            cusId: value
                        })
                    }}
                />
                <TextInput
                    placeholder="Customer Name"
                    style={styles.textInput}
                    value={this.state.cusName}
                    onChangeText={(value) => {
                        this.setState({
                            cusName: value
                        })
                    }}
                />
                <TextInput
                    placeholder="Customer Address"
                    style={styles.textInput}
                    value={this.state.cusAddress}
                    onChangeText={(value) => {
                        this.setState({
                            cusAddress: value
                        })
                    }}
                />
                <TextInput
                    placeholder="Customer Salary"
                    style={styles.textInput}
                    value={this.state.cusSalary}
                    onChangeText={(value) => {
                        this.setState({
                            cusSalary: value
                        })
                    }}
                />
                <Button
                    title="Save Customer"
                    color="#2ecc71"
                    onPress={this.saveCustomer}
                />
                <Button
                    title="Load All Customers"
                    color="#c0392b"
                    onPress={this.getDate}
                />
            </View>
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
