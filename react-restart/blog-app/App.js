import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import axios from 'axios'
import { Dimensions } from "react-native";

class HomeScreen extends React.Component {
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
                
                <View 
                
                style={styles.articleView}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Details')}
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
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
      </View>
    );
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