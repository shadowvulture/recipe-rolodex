import React from "react";

import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ListView,
  FlatList

} from "react-native";
import { createAppContainer, createStackNavigator, SafeAreaView } from "react-navigation"; // Version can be specified in package.json
import axios from "axios";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Tabbar from './tabBar'

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      article: []
    };
    // console.log(this.props);
  }
  componentDidMount() {
    axios
      .get("https://p4back.herokuapp.com/api/article")
      .then(res => {
        // console.log(res)
        data1 = res.data;
        data1.sort(function(a, b) {
          return b._id.localeCompare(a._id);
        });
        // console.log("sorted", data1);
        this.setState(
          {
            article: data1
          },
          () => {
            console.log('after', this.state)
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
    // console.log('before', this.state)
  }

  render() {
    
    if (this.state.article.length > 0) {
      
      return (
        
        <View>
          <ScrollView style={{ height: height * 0.82 }}>
            {this.state.article.map(post => {
              // const {navigate} = this.props.navigation;
              return (
                <View style={styles.articleView}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("Details", {
                        article: post
                      })
                    }
                    style={styles.articleView}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: post.urlToImage }}
                    />
                    {/* <Button
                title="Go to New Component"
                onPress={() => navigate('BlogPost', {name: 'Jane'})}
                /> */}
                    <Text style={styles.title}>{post.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
          <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.tabBar}>
            <TouchableOpacity
              onPress={() =>
                
                  this.props.navigation.navigate("Home", {
                
                })
              }
            >
              <Image
                style={styles.tabBarIcon}
                source={require("./assets/icons8-log-cabin-filled-50.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Categories", {
                  article: data1
      
                })
              }

            >
            <Image
              style={styles.tabBarIcon}
              source={require("./assets/icons8-category-filled-50.png")}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AboutUs", {

                })
              }
            >
            <Image
              style={styles.tabBarIcon}
              source={require("./assets/information-button.png")}
            />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        
      );
    } else {
      console.log("crap");
    }
    return <View style={{backgroundColor: 'red'}} />;
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
  constructor(props) {
    super(props);
    // this.deleteTeam = this.deleteTeam.bind(this)
  }

  render() {
    var str = this.props.navigation.state.params.article.content;
    var blogData = str.replace(/\\/g, "");
    // console.log("testy", this.props.navigation.state.params.article.title);
    // // if (this.props.navigation.state.params.article.length > 0 ) {
    // console.log("eureka", this.props.navigation.state.params.article.title);
    console.log('authorpic', this.props.navigation.state.params.article.authorImg)
    return (
      <View>
        <ScrollView  style = {{height: height * 0.82}}>
          <Text style={styles.blogTitle}>
            {this.props.navigation.state.params.article.title}
          </Text>
          {/* Author View */}
          <View style={{ flex: 1, height: 50, flexDirection: "row" }}>
            <View style={{ width: 60, marginLeft: 5 }}>
              <Image
                style={styles.authorPic}
                source={{uri: this.props.navigation.state.params.article.authorImg}}
              /> 
            </View>
            <View style={styles.author} />

            <View style={{ width: 200, paddingTop: 15 }}>
              <Text style={styles.blogAuthor}>
                By: {this.props.navigation.state.params.article.author}
              </Text>
            </View>
          </View>

          <Image
            style={styles.image}
            source={{
              uri: this.props.navigation.state.params.article.urlToImage
            }}
          />

          <Text style={styles.blogContent}>{blogData}</Text>
          {/* <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        /> */}
          {/* <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        <TouchableOpacity
                    onPress={() =>
                
                      this.props.navigation.navigate("Home", {
                    
                    })
                  }
                  
                  >
        <Image style = {{marginLeft: width * .3 }}
        source = {require('./assets/eagle.jpeg')} 
        onPress={() =>
                
          this.props.navigation.navigate("Home", {
        
        })
      }/>
      <Text style={{textAlign: 'center', fontSize: 24}}>Click to go back.</Text>
        
        </TouchableOpacity>
          {/* <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          /> */}
        </ScrollView>
        {/* TABBAR */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.tabBar}>
            <TouchableOpacity
              onPress={() =>
                
                  this.props.navigation.navigate("Home", {
                
                })
              }
            >
              <Image
                style={styles.tabBarIcon}
                source={require("./assets/icons8-log-cabin-filled-50.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Categories", {
                  article: data1
                })
              }
            >
            <Image
              style={styles.tabBarIcon}
              source={require("./assets/icons8-category-filled-50.png")}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AboutUs", {
                  // article: this.props.prop2
                })
              }
              // style={tabStyles.articleView}
            >
            <Image
              style={styles.tabBarIcon}
              source={require("./assets/information-button.png")}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    // } else {
    //   console.log('crap')
    // }
    // return (

    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    //   </View>
    // );
  }
}
class CategoriesScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteTeam = this.deleteTeam.bind(this)
  }

  render() {
    var lookup = {};
var result = [];
var data = this.props.navigation.state.params.article
for (var item, i = 0; item = data[i++];) {
    var category = item.category;
  
    if (!(category in lookup)) {
      lookup[category] = 1;
      result.push(category);
    }
  }   

  console.log(result)
    // var str = this.props.navigation.state.params.article.content;
   console.log('cat', this.props)
    return (
      
      <View>
       <ScrollView style={{ height: height * 0.82 }}>
            {result.map(post2 => {
              // const {navigate} = this.props.navigation;
              return (
                <View style={styles.articleView}>
                   <TouchableOpacity
                      style = {styles.category}
                      onPress = {() => this.props.navigation.navigate("CategoryArticles", {
                        article: data,
                        selected: post2
                      })}>
                     <Text style = {styles.catText}>
                        {post2}
                     </Text>
                  </TouchableOpacity>

                    
                    {/* <Button
                title="Go to New Component"
                onPress={() => navigate('BlogPost', {name: 'Jane'})}
                /> */}
                  
                  
                </View>
              );
            })}
          </ScrollView>
      </View>
     
    );
  }
}
class CategoryArticlesScreen extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    let articlesList = this.props.navigation.state.params.article.filter((item) => 
    item.category === this.props.navigation.state.params.selected)

    console.log('bobcat', this.props.navigation.state.params.article)
    console.log('bobcat2', this.props.navigation.state.params.selected)

    console.log('bobcat3', articlesList[0].author)

    return (
      <View>
        <ScrollView style={{ height: height * 0.82 }}>
            {articlesList.map(item => {
              // const {navigate} = this.props.navigation;
              return (
                <View style={styles.articleView}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("Details", {
                        article: item
                      })
                    }
                    style={styles.articleView}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: item.urlToImage }}
                    />
                    {/* <Button
                title="Go to New Component"
                onPress={() => navigate('BlogPost', {name: 'Jane'})}
                /> */}
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
      </View>
    )
  }
}
class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    
    return (
      
      <View>
      <ScrollView style={{ height: height * 0.82 }}>
        <Text
        style={{fontSize: 36, fontWeight: 'heavy', textAlign: 'center', backgroundColor: '#38bbd8'}}
        >About Me</Text>
        <Text
        style={{fontSize: 30, paddingTop: 10, paddingBottom: 10, textAlign: 'center'}}
        >What do you get when you mix dedication, grit, creativity, passion, and blue collar with white collar?  </Text>
        
        <Image 
        style={{width: width, height: 650}}
        source={require("./assets/derek_full.jpg")} />
        </ScrollView>
      </View>
    )
  }
}
    
  


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    CategoryArticles: {
      screen: CategoryArticlesScreen
    },
    AboutUs: {
      screen: AboutUsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return<AppContainer />;
  }
}

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 150,
    marginTop: 8
  },
  tabBarIcon: {
    width: 40,
    height: 40,
    marginLeft: width * 0.11,
    marginTop: height * 0.01
  },
  tabBar: {
    width: width / 3,
    height: height * 0.2,
    backgroundColor: "#38bbd8"
  },
  blog: {
    fontSize: 16,
    textAlign: "center",
    alignItems: "center"
  },
  blogTitle: {
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
    marginTop: 10
  },
  blogAuthor: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10
  },
  author: {
    fontSize: 14,
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
    height: 50
  },
  blogContent: {
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    paddingTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    paddingTop: 5,
    marginBottom: 0
    // marginVertical: 0,
  },
  articleView: {
    // borderBottomColor: '#acadaf',
    // borderBottomWidth: 2,
    borderWidth: 0.5,
    borderColor: "black"
    // backgroundColor: 'white',
  },
  authorPic: {
    width: 50,
    height: 50
  },
  category: {
      padding: 10,
      marginTop: 3,
      height: 100,
      backgroundColor: '#38bbd8',
      alignItems: 'center',
  },
  catText: {
    marginTop: 30,
    fontSize: 16
  }
});
console.log("details", this.props);
