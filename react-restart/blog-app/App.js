import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import axios from 'axios'
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  constructor () {
    super() 
    this.state = {
        article: []
    }
    console.log(this.props)
}
componentDidMount () {
    axios.get('https://p4back.herokuapp.com/api/article')
      .then((res) => {
        // console.log(res)
        this.setState({
          article: res.data
        }, () => {
          // console.log('after', this.state)
        })
      })
      .catch((err) => {
        console.log(err)

      })
      // console.log('before', this.state)
  }

  render() {
    if (this.state.article.length > 0 ) {
        
      return (
  
        <View>
          <ScrollView>
                  
              {this.state.article.map((post => {
      // const {navigate} = this.props.navigation;
      return (
                
                <View
                
                style={styles.articleView}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Details', {article: post})}
                  style={styles.articleView}>
              <Image style ={styles.image}
                source = {{uri: post.urlToImage}} />
              {/* <Button
                title="Go to New Component"
                onPress={() => navigate('BlogPost', {name: 'Jane'})}
                /> */}
              <Text style={styles.title}>{post.title}</Text>
              </TouchableOpacity>
              </View>
             
              
            )
            }))}   
                </ScrollView>
              </View>
      );
    } else {
        console.log('crap')
    }
    return (
        <View>
  
        </View>
    )
    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Home Screen</Text>
    //     <Button
    //       title="Go to Details"
    //       onPress={() => this.props.navigation.navigate('Details')}
    //     />
    //   </View>
    // );
  }
}

class DetailsScreen extends React.Component {
  constructor (props) {
    super (props)
    // this.deleteTeam = this.deleteTeam.bind(this)
    
}
  
  render() {
    var str = this.props.navigation.state.params.article.content
    var blogData = str.replace(/\\/g, "");
    console.log('testy', this.props.navigation.state.params.article.title)
    // if (this.props.navigation.state.params.article.length > 0 ) {
      console.log('eureka', this.props.navigation.state.params.article.title)
      return(
        <View>
          <ScrollView>
          <Text 
              style={styles.blogTitle}>
              {this.props.navigation.state.params.article.title}</Text>
              {/* Author View */}
              <View style = {{flex: 1, height: 50, flexDirection: 'row'}}>
                  <View style = {{width: 60, marginLeft: 5}}>
                  <Image style = {styles.authorPic}
                    source={require('./assets/derek_circle.jpg')} />
                    </View>
                    <View 
                    style = {styles.author} />
                
                <View style = {{width: 200, paddingTop: 15}}>
                   
                    <Text style={styles.blogAuthor}>
                    By: {this.props.navigation.state.params.article.author}</Text>
                    </View>
                    </View>
            

          <Image style ={styles.image}
              source = {{uri: this.props.navigation.state.params.article.urlToImage}} />
          
             
          <Text 
              style={styles.blogContent}>
              {blogData}</Text>        
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
        />
        </ScrollView>
        </View>
      )
    // } else {
    //   console.log('crap')
    // }
    // return (
      
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
    //   </View>
    // );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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
  blog: {
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
  },
    blogTitle:{
      fontSize: 24,
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    blogAuthor:{
      fontSize: 14,
      textAlign: 'left',
      marginLeft: 10,
    },
    author:{
      fontSize: 14,
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 10,
      height: 50,
      
    },
  blogContent: {
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: 15,
    marginLeft: 10,
    marginRight: 10
    
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
  
  },
  authorPic : {
    width: 50,
    height: 50,
  
  }
})
console.log('details', this.props)