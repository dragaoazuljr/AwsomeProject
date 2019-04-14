import React, { Component } from 'React'
import { Platform, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native';
import { Button } from '../ui-components/button'
import { Input } from '../ui-components/Input';


export class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    login: '',
    password: ''
  }

  valLogin = () => {
    if (this.state.login && this.state.password) {
      this.props.navigation.push('Home')
    } else {
      ToastAndroid.show('Usuário e senha inválidos!', ToastAndroid.SHORT)
    }
  }


  render() {
    return (
      <View style={styles.form}>
        <View style={styles.input}>
          <Input style={styles.loginInput} placeholder={'Login'} placeholderTextColor={'#FFFFFF'} onChangeText={(login) => this.setState({ login })}></Input>
        </View>
        <View style={styles.input}>
          <Input style={styles.passInput} placeholder={'Password'} secureTextEntry={true} placeholderTextColor={'#FFFFFF'} onChangeText={(password => { this.setState({ password }) })}></Input>
        </View>
        <Button text={'Entrar'} onPress={() => this.valLogin()}></Button>
        <View style={styles.forgotView}>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
  input: {
    marginBottom: 10,
  },
  loginInput: {
    color: '#FFFFFF'
  },
  passInput: {
   color: '#FFFFFF'
  },
  forgot: {
    color: '#B5C0C7',
    textAlign: 'center'
  },
  forgotView: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    padding: 10
  }
})

export default LoginForm