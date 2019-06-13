import react from "react";
import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  styles,
  TouchableOpacity
} from "react-native";

export default class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navProps: [],
      articleProps: []
    }
  }

  render() {
    console.log("tabb", this.props.prop1);
    this.setState = {
      navProps : this.props.prop2
      
    }
    // if (this.props.article > 0) {
      // console.log('tab', this.props)
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={tabStyles.tabBar}>
            <TouchableOpacity
              onPress={() =>
                this.props.prop1.navigate("Home", {
                  article: this.props.prop2
                })
              }
              // style={tabStyles.articleView}
            >
              <Image
                style={tabStyles.tabBarIcon}
                source={require("./assets/icons8-log-cabin-filled-50.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={tabStyles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.prop1.navigate("Categories", {
                  article: this.props.prop2
                })
              }
              // style={tabStyles.articleView}
            >
            <Image
              style={tabStyles.tabBarIcon}
              source={require("./assets/icons8-category-filled-50.png")}
            />
            </TouchableOpacity>
          </View>
          <View style={tabStyles.tabBar}>
          <TouchableOpacity
              onPress={() =>
                this.props.prop1.navigate("Categories", {
                  article: this.props.prop2
                })
              }
              // style={tabStyles.articleView}
            >
            <Image
              style={tabStyles.tabBarIcon}
              source={require("./assets/icons8-online-store-50.png")}
            />
            </TouchableOpacity>
          </View>
        </View>
      );
    // } else {
    //   return <View />;
    // }
    // <View />
  }
}









var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const tabStyles = StyleSheet.create({
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
  }
});
