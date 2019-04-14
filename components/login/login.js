import React, { Component } from 'React'
import {Platform, StyleSheet, Text, View, Image, Animated, Easing, StatusBar} from 'react-native';

import {LoginForm} from './loginForm'
import { Gradient } from '../ui-components/gradient';

const logo = require('../../assets/logo_cade.png')

export default class Login extends Component {
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        header: null
    }

    state = {
        fadeAnim: new Animated.Value(0),
        formAnim: new Animated.Value(0),
        fadeText: new Animated.Value(0)
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
        let fadeText = {
            toValue: 1,
            duration: 200,
            easing: Easing.in()
        }

        Animated.timing(this.state.fadeAnim, fadeOption).start()
        Animated.timing(this.state.formAnim, formOption).start()
        Animated.timing(this.state.fadeText, fadeText).start()
    }

    render(){
        let {fadeAnim, formAnim} = this.state;

        return (
            <View style={styles.MainView}>
                <Animated.View style={{...styles.logoImg, opacity: fadeAnim}}>
                    <Gradient style={styles.logoBackground}>
                        <Image source={logo} style={styles.logo} resizeMode="contain"></Image>
                    </Gradient>
                </Animated.View>
                <Animated.View style={{opacity: fadeAnim}}>
                    <Text style={styles.appTitle}>Cadê Meu Livro?</Text>
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
        backgroundColor: '#191B2A',
        alignItems: 'center'
    },
    appTitle: {
        color: '#FFFFFF',
        fontWeight: '200',
        fontFamily: 'Helvetica',
        fontSize: 30
    },
    logoImg:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    },
    logoBackground: {
        width: 150,
        height: 150,
        borderRadius: 10
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