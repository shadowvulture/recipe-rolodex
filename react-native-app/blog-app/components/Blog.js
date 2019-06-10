import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

export default class Blog extends Component {
    constructor () {
        super() 
            this.state = {
                posts: []
            }
        }
        componentDidMount () {
            axios.get('http://localhost:8081/api/article')
              .then((res) => {
                console.log(res)
                this.setState({
                  posts: res.data
                }, () => {
                  console.log('after', this.state)
                  return 
                
                })
              })
              .catch((err) => {
                console.log(err)
               
              })
              console.log('before', this.state)
          }
    
          render() {
            if (this.state.posts.length > 0) {
      
              return (
                <View>
                <Text>Blog Post One</Text>
               </View>
              )
            } else {
              console.log('Crap')
            }
      
      
      
            return (
              <View>
                {/* <img src={thisTeam[0].image} className ="team" alt="team logo"></img> */}
      
              </View>
            )
            }
      
      }

