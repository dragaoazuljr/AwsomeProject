import React, { Component } from 'React'
import {Platform, StyleSheet, Text, View, Image, Animated, Easing, StatusBar} from 'react-native';

import {LoginForm} from './loginForm'

const logo = require('../../assets/logo.png')

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        header: null
    }

    state = {
        fadeAnim: new Animated.Value(0),
        formAnim: new Animated.Value(0)
    }

    componentDidMount(){
        let fadeOption = {
            toValue: 1,
            duration: 300,
            easing: Easing.in()
        }
        let formOption = {
            toValue: 1,
            duration: 300,
            delay: 300,
            easing: Easing.in()
        }

        Animated.timing(this.state.fadeAnim, fadeOption).start()
        Animated.timing(this.state.formAnim, formOption).start()
    }

    render(){
        let {fadeAnim, formAnim} = this.state;

        return (
            <View style={styles.MainView}>
                <Animated.View style={{...styles.logoImg, opacity: fadeAnim}}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"></Image>
                </Animated.View>
                <Animated.View style={{...styles.loginFormView, opacity: formAnim}}>
                    <LoginForm {...this.props}/>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: '#30425A',
        alignItems: 'center'
    },
    logoImg:{
        flex:1,
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    logo:{
        flex: 1,
        width: undefined,
        height: undefined  
    },
    loginFormView:{
        flex:1,
        width: 250
    }
})