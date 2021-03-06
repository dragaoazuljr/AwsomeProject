import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from "react-native"
import { Gradient } from "./gradient";
import FontAwesome, { Icons, IconTypes } from 'react-native-fontawesome'
import Icon from 'react-native-vector-icons/FontAwesome'

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
            <TouchableOpacity onPress={() => alert('hi!')}>
              <View style={stylef.menuViewButton}>
                <Icon style={stylef.menuIcon} name="bars"></Icon>
              </View>
            </TouchableOpacity>
            <View style={stylef.middle}>
              <Text style={stylef.text}>Home</Text>
            </View>
            <TouchableOpacity onPress={() => alert('hi!')}>
              <View style={stylef.menuViewButton}>
                <Icon style={stylef.menuIcon} name="search"></Icon>
              </View>
            </TouchableOpacity>
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
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '600'
  },
  menuButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: '#FFFFFF',
    fontSize: 20
  },
  viewButton: {
    width: 50,
  },
  menuViewButton: {
    width: 50,
    alignItems: 'center'
  },
  middle: {
    flex: 1
  }
})