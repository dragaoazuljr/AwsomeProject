import LinearGradient from 'react-native-linear-gradient'
import React, {Component} from 'React'

export const Gradient = props => (
    <LinearGradient style={props.style} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fd4762', '#F8A82F']} {...props}>
        {props.children}
    </LinearGradient>
)