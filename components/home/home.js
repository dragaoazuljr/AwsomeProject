import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import NavBar from '../ui-components/navbar';
import Carousel from 'react-native-snap-carousel';

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.setState({
      contents
    })
  }

  static navigationOptions = {
    header: <NavBar></NavBar>
  }

  render() {
    return (
      <View style={styles.main}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.contents}
          renderItem={this._renderItem}
          sliderWidth={100}
          itemWidth={100} />
      </View>
    )
  }
}

// const carrouselCard = props => (
//     <View class={style.carrouselCard}>

//     </View>
// )

// const Card = props => (
//    <View>

//    </View> 
// )

const contents = [{
  title: "Meu Ovo",
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Gugu no tunel de Fogo',
  desc: 'Meus Deus do ceu',
  img: 'https://3.bp.blogspot.com/-_vz5aGiOKxs/WnTfqav71ZI/AAAAAAAAuIc/3pQn9AgziFIl0N4ZtYvb4F8cWXpATtI3QCLcBGAs/s1600/Gugu.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}, {
  title: 'Meu Ovo',
  desc: 'Faustao falando Meu Ovo',
  img: 'https://i.ytimg.com/vi/8lI8WarSvBY/hqdefault.jpg'
}]

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})