import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import axios from 'axios'
import { Dimensions } from "react-native";


export default class Article extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
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

      <View>
                
            {this.state.article.map((post => {
    // const {navigate} = this.props.navigation;
    return (
            
              <View style={styles.articleView}>
            <Image style ={styles.image}
              source = {{uri: post.urlToImage}} />
            {/* <Button
              title="Go to New Component"
              onPress={() => navigate('BlogPost', {name: 'Jane'})}
              /> */}
            <Text style={styles.title}>{post.title}</Text>
            </View>
            
          )
          }))}   

            </View>
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          // <Image style ={styles.image}
          // source = {{uri: this.state.article[1].urlToImage}} />
      //     <Text style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      //     {this.state.article[1].content}</Text>
      //   <Text>Published: {this.state.article[0].published}</Text> 
      //   <Text>By: {this.state.article[0].author}</Text>
      // </View>
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
        height: 150,
        marginTop: 8,
        
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      alignItems: 'center',
      paddingTop: 5,
      marginBottom: 0
      // marginVertical: 0,
    },
    articleView: {
    // borderBottomColor: '#acadaf',
    // borderBottomWidth: 2,
    borderWidth: 0.5,
    borderColor: 'black',
    // backgroundColor: 'white',
    
    }
})



