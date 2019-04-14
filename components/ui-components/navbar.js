import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native"
import { Gradient } from "./gradient";


export default class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={stylef.navbar}>
                <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'}></StatusBar>
                <Gradient style={stylef.gradient} colors={["#FA405F", '#D540B3']}>
                    <View style={stylef.content}>
                        <View style={stylef.menuButton}>
                            <Text>btn</Text>
                        </View>
                        <View style={stylef.middle}>
                            <Text style={stylef.text}>It's just works!</Text>
                        </View>
                        <View style={stylef.userAvatar}>
                            <Text>faustao</Text>
                        </View>
                    </View>
                </Gradient>
            </View>
        )
    }

} 
const stylef = StyleSheet.create({
    navbar: {
        height: 70,
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 1,
    },
    gradient: {
        flex:1,
    },
    content: {
        flex: 1,
        marginTop:20,
        flexDirection:'row',
        alignItems: 'center'  
    },
    text: {
        textAlign:'center'
    },
    menuButton:{
        textAlign:'center',
        width:50,
        backgroundColor: '#FFFFFF'
    },
    userAvatar:{
        textAlign:'center',
        width:50,
        backgroundColor: '#FFFFFF'
    },
    middle: {
        flex:1
    }
})