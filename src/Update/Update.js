import React, { Component } from 'react';
import axios from 'axios'
import './Update.css'

class Update extends Component {
    constructor(props) {
        super (props)
        this.state = {        }
    }

    componentDidMount = () => {
        this.getRecipe();
    }

    getRecipe = () => {
        axios.get('https://reactreciperolodex.herokuapp.com/api/recipe/id/' + this.props.match.params.id)
        .then((res) => {
          console.log(res)
          this.setState({
            recipe: res.data[0]
          }, () => {
            console.log('after', this.state)
          })
        })
        .catch((err) => {
          console.log(err)
    
        })
    
      }

    render() {
        let recipeDiv
        if (this.state && this.state.recipe) {
            recipeDiv = <div>
                Testing {this.state.recipe.Title}
            </div>
        }
        return (
            <div className="ingredientsInput">
                here
                {recipeDiv}
            </div>
        );
    }
}

export default Update;