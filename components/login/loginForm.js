import React, { Component } from 'React'
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid} from 'react-native';


export class LoginForm extends Component {
  
  constructor(props){
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
        <View>
          <TextInput style={styles.loginInput} placeholder={'Login'} placeholderTextColor={'#B5C0C7'} onChangeText={(login) => this.setState({login})}></TextInput>
          <TextInput style={styles.passInput} placeholder={'Password'} secureTextEntry={true} placeholderTextColor={'#B5C0C7'} onChangeText={(password => {this.setState({password})})}></TextInput>
        </View>
        <Button color="#009A9A" style={styles.button} title={'Entrar'} onPress={() => this.valLogin()}></Button>
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
  loginInput: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#B5C0C755',
      color: '#B5C0C7'
  },
  passInput: {
      borderBottomWidth: 1,
      borderColor: '#B5C0C755',
      marginBottom: 50,
      color: '#B5C0C7'
  },
  forgot: {
      color: '#B5C0C7',
      textAlign: 'center'
  },
  forgotView: {
      flex:1,
      justifyContent: 'center'
  },
  button: {
      backgroundColor: '#009A9A'
  }
})

export default LoginForm