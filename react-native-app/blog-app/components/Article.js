import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import axios from 'axios'
import { Dimensions } from "react-native";

export default class Article extends Component {
    constructor () {
        super() 
        this.state = {
            article: []
        }
    }
    componentDidMount () {
        axios.get('https://p4back.herokuapp.com/api/article')
          .then((res) => {
            console.log(res)
            this.setState({
              article: res.data
            }, () => {
              console.log('after', this.state)
            })
          })
          .catch((err) => {
            console.log(err)
  
          })
          console.log('before', this.state)
      }
      
  render() {
      if (this.state.article.length > 0 ) {
        
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image style ={styles.image}
          source = {{uri: this.state.article[1].urlToImage}} />
          <Text style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          {this.state.article[1].content}</Text>
        <Text>Published: {this.state.article[0].published}</Text> 
        <Text>By: {this.state.article[0].author}</Text>
      </View>
    );
  } else {
      console.log('crap')
  }
  return (
      <View>

      </View>
  )
}
}
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 200
    }
})



