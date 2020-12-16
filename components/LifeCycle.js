import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class LifeCycle extends Component {
    //**mounting
    //constructor
    //render
    //componentDidMount

    //updating
    //render
    //shouldComponentUpdate
    //componentDidUpdate

    //error handling
    //componentDidCatch

    componentDidCatch() {

    }

    shouldComponentUpdate() {
        console.log("Should Compoent Update")
    }

    componentDidUpdate() {
        console.log("Compoent Did Update")
    }

    constructor() {
        super()
        console.log("This is constructor")
    }

    componentDidMount() {
        console.log("This is Component Did Mount")
    }

    render() {
        console.log("This is Render")
        return (
            <View>
                <Text>Welcome Lifecycle</Text>
            </View>
        )
    }
}
