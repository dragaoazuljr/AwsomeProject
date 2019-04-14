import React, { Component } from 'React'
import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Gradient } from '../ui-components/gradient'

export const Button = Platform.select({
    ios: (props) => (<ButtonIos {...props}></ButtonIos>),
    android: (props) => (<ButtonAndroid {...props}></ButtonAndroid>)
})

export const ButtonIos = props => (
    <TouchableOpacity onPress={props.onPress}>
        <ViewButton {...props}></ViewButton>
    </TouchableOpacity>
)

export const ButtonAndroid = props => (
    <TouchableNativeFeedback class={style.gradient} onPress={props.onPress} background={TouchableNativeFeedback.Ripple('white')}>
        <View>
            <ViewButton {...props}></ViewButton>
        </View>
    </TouchableNativeFeedback>
)


const ViewButton = props => (
    <View style={style.button}>
        <Gradient style={style.gradient}>
            <TextButton {...props}></TextButton>
        </Gradient>
    </View>
)

const TextButton = props => (
    <Text style={props.textType || props.textStyle || style.text}>{props.text.toUpperCase()}</Text>
)

const style = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    gradient: {
        borderRadius:5,
        padding: 10
    },
    button: {
        backgroundColor: '#AAAAAA',
        borderRadius: 5,
    }
})