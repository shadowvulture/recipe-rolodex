import React, { Component } from 'react';
import './Recipe.css';
import Axios from 'axios'
import { NavLink } from 'react-router-dom';

class Recipe extends Component {
    constructor (props) {
        super(props)
        console.log(this.props)
        // this.props.refreshData()
        
    }
    // componentDidMount () {
    //     this.refreshData()
    //       // console.log('before', this.state)
    //   }
    deleteRecipe = id =>
    {
        console.log(localStorage)
        console.log( localStorage.token )
        console.log(id)
    // console.log(`${this.props.allRecipes.filter(id => id)} allRecipes`)
    let newUrl = 'https://reactreciperolodex.herokuapp.com/api/recipe/delete/' + id
    // console.log(newUrl)
        Axios.delete( newUrl,
        {
            headers: {
                'auth-token': localStorage.token
            }
        }).then( res =>
        {
        console.log(localStorage)
        console.log(res)
        console.log(res.data)
        this.props.refreshData()
      
    })
    }


    render() {
  let ingredients = [];
  let ingredient;
        console.log(this.props)
        
        let thisRecipe;
        if (this.props.allRecipes.length > 0) {
        
             thisRecipe = this.props.allRecipes.filter((item) => item._id === this.props.match.params.id)
             console.log(this.props.match.params.id)
            for (let i = 0; i < thisRecipe[0].Ingredients.FoodType.length; i++) {
                console.log(thisRecipe[0].Ingredients.FoodType[i])
                ingredients.push(thisRecipe[0].Ingredients.FoodType[i] + " " + thisRecipe[0].Ingredients.FoodAmount[i])
                // for (let z = 0; z < thisRecipe[0].Ingredients.FoodAmount.length; z++) {
                //     console.log(thisRecipe[0].Ingredients.FoodAmount[z])
                //             }
                        }

                        
    const listIngredients = ingredients.map((ingredient) => <li>{ingredient}</li>)
            return (
                /* FRONT OF RECIPE CARD */
                <div>
                <div className="recipeContainer" id="recipeContainer">
               <button class="material-icons trash-button"
                type='submit'
                name='_id'
                value={thisRecipe[0]._id}
                onClick={() => this.deleteRecipe(thisRecipe[0]._id)}>delete_forever</button>
           <h3 className="recipe-title">{thisRecipe[0].Title}
           <br />
           </h3>
         
                <div className="recipeCard">
                    <img src={thisRecipe[0].Thumbnail} alt="foot image" className="recipeImage"></img>
                    <div className="recipeText">
                        <p className="boldText">Cook Time: </p>
                        <p><span class="emoji">⏱</span>{thisRecipe[0].Cooktime}</p>
                     
                   
                    </div>
                </div>
                
           </div>
        {/* BACK OF RECIPE CARD */}
        <div className="recipeContainer" id="recipeContainerBot">
           
        <NavLink to={`/api/recipe/update/${thisRecipe[0]._id}`}>
                <button className="update" id="update"
                    type='submit'
                    name='_id'
                    value={thisRecipe[0]._id}> Update
                </button>
            </NavLink>
           <br />
          
                <div className="recipeCard" id="recipeCard">
                    <div className="recipeText" id="recipeText">
                        <p className="boldText">Ingredients: </p>
                        <p>
                        <ul className="ul">
                        {listIngredients}
                        </ul>
                        </p>
                
                    </div>
                </div>
                
           </div>

           {/* INSTRUCTIONS CARD */}
           <div className="recipeContainer" id="recipeContainerBot">
           <br />
          
                <div className="recipeCard" id="recipeCard">
                    <div className="recipeText" id="recipeText">
                        <p className="boldText" id="instructions">Instructions: </p>
                        <p className ="instructionsText">{thisRecipe[0].Instructions}
                        
                        </p>
                
                    </div>
                </div>
                
           </div>
           </div>
  
 

/* Input fields for update are saved below.  In the meantime, the above text simplpy prints out the individual recipe info
                // <div className="container">
                {/* <div className="recipePageLeft">
                <img src={thisRecipe[0].Thumbnail} className="recipeImage" alt="foot image"></img>
                </div>
                <div className="recipePageRight">
                <form>
                    Recipe Name: <br />
                    <input type="text" className="input" placeholder={thisRecipe[0].Title}></input> <br />
                    Cook Time: <br />
                    <input type="text" className="input" placeholder={thisRecipe[0].Cooktime}></input> <br />
                    Instructions: <br />
                    <input type="text" className="input" placeholder={thisRecipe[0].Instructions}></input> <br />
                    Ingredients: <br />
                    <input type="text" className="input" placeholder={thisRecipe[0].Ingredients.FoodType}></input> <br />
                    Amount: <br />
                    <input type="text" className="input" placeholder={thisRecipe[0].Ingredients.FoodAmount}></input> <br />

                </form>
                <form onSubmit={this.submitFunction}>
                     <button type="submit" className="button">Update</button>
                </form>
                // </div> */
                // </div>
    
            )
        }
        return (
            <div>
                <h1>Testing</h1>
                <br />
                <h1>More testing</h1>
            </div>
        );
    }
}

export default Recipe;