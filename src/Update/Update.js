import React, { Component } from 'react';
import axios from 'axios'
import './Update.css'

class Update extends Component {
    constructor(props) {
        super (props)
        this.state = {
            Title: '',
            Thumbnail: '',
            Cooktime: '',
            Instructions: ''

                }
                this.handleChange = this.handleChange.bind(this);
                this.updateRecipe = this.updateRecipe.bind(this);
    }

    componentDidMount = () => {
        this.getRecipe();
    }

    getRecipe = () => {
        axios.get('https://reactreciperolodex.herokuapp.com/api/recipe/id/' + this.props.match.params.id)
        .then((res) => {
          console.log(res)
          this.setState({
            recipe: res.data[0],
            Title: res.data[0].Title,
            Thumbnail: res.data[0].Thumbnail,
            Cooktime: res.data[0].Cooktime,
            Instructions: res.data[0].Instructions
          }, () => {
            console.log('after', this.state)
          })
        })
        .catch((err) => {
          console.log(err)
    
        })
    
      }
      
      handleChange(event) {
        event.preventDefault();
        console.log(event.target.name)
  
        this.setState({ [event.target.name] : event.target.value});
        console.log(this.state);
        
      }
      
      updateRecipe = () => {
        const URL = 'https://reactreciperolodex.herokuapp.com/api/recipe/update/' + this.props.match.params.id
          
          axios.put(URL, {
            Title : this.state.Title,
            Thumbnail : this.state.Thumbnail,
            Cooktime: this.state.Cooktime,
            Instructions: this.state.Instructions,
            headers: {"Content-Type": "application/json"}
          }
              
              
          )
          .then((res) => {
              console.log(res)
              console.log(URL)
          })
      }

    render() {
        let recipeDiv
        if (this.state && this.state.recipe) {
            recipeDiv = <div className="recipeDiv">
               <form onSubmit={this.updateRecipe}>
                Recipe Name: <br />
                <input name="Title" onChange={this.handleChange} placeholder={this.state.recipe.Title}></input> <br />
                Recipe Image URL: <br />
                <input name="Thumbnail" onChange={this.handleChange} placeholder={this.state.recipe.Thumbnail}></input> <br />
                Estimated Cooking Time: <br />
                <input name="Cooktime" onChange={this.handleChange} placeholder={this.state.recipe.Cooktime}></input> <br />
                Instructions: <br />
                <input name="Instructions" onChange={this.handleChange} placeholder={this.state.recipe.Instructions}></input> <br />
                <button type="submit" className="updateBtn">Update Recipes</button>
                </form>
            </div>
        }
        return (
            <div className="ingredientsInput">
                
                {recipeDiv}
            </div>
        );
    }
}

export default Update;