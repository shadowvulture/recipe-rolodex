import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './Show.css';
import Axios from 'axios';

class Show extends Component {
    constructor (props) {
        super (props);
        this.state = {
            recipes: []
        }
        
    }


    deleteRecipe = id => {
    const self = this 
    console.log(id)
    // console.log(`${this.props.allRecipes.filter(id => id)} allRecipes`)
    let newUrl = 'https://reactreciperolodex.herokuapp.com/api/recipe/delete/' + id
    console.log(newUrl)
    Axios.delete(newUrl).then(res => {
        console.log(res)
        console.log(res.data)
        this.props.refreshData()
       
    })
    
    }
    render() {
    
        console.log(this.props.allRecipes)
        if (this.props.allRecipes.length > 0) {
        return (
            <div>
            <div className = "background2">
            <div className="topRow">
                
            {this.props.allRecipes.map((item => {
    
            return (
               
           <div className="recipeContainer">
               <button class="material-icons trash-button" 
                type='submit'
                name='_id'
                value={item._id}
                onClick={() => this.deleteRecipe(item._id)}>delete_forever</button>
           <h3 className="recipe-title">{item.Title} 
           <br />
           </h3>
                onClick={() => this.deleteRecipe(item._id)}>delete_forever</button></h3>
                 <NavLink to={`{/id/${item._id}`}>

                <div className="recipeCard">
                    <img src={item.Thumbnail} alt="foot image" className="recipeImage"></img>
                    <div className="recipeText">
                        <p className="boldText">Cook Time: </p>
                        <p><span class="emoji">⏱</span>{item.Cooktime}</p>
                        <p className ="boldText">Instructions: </p>
                        <p>{item.Instructions}</p>
                    </div>
                </div>
                </NavLink> 
           </div>    
          
            
           )
          }))}   

            </div>
            </div>
            </div>
        );} else {
            return (
                <div>
                    <h1>Testing</h1>
                </div>
            )
        }
    }
}
//     render () {
//         console.log(this.props.allRecipes[0])
//         if (this.props.allRecipes.length > 0) {
//         console.log(this.props.allRecipes)
       
//         return(
            

//             <div className="topRow">
//                 <div className ="recipeContainer">
//                     <h3>{this.props.allRecipes[0].Title}</h3>
//                         <div className="recipeCard">
//                             <img src ="https://via.placeholder.com/150x150" classname="recipeImage" alt="food image"></img>
//                                 <div className="recipeText">
//                                  <p>{this.props.allRecipes[0].Cooktime}</p> <br />
//                                  <p>{this.props.allRecipes[0].Instructions}</p>
//                                  </div>
//                         </div>
//                 </div>
//             </div>
//         )
//         }
        
//     return (
//         <div>
            
//             <div className ="topRow">
//                 <div className ="recipeContainer">
//                     <h3>Recipe Title</h3>
//                     <div className ="recipeCard">
//                     <img src="https://via.placeholder.com/150x150" className="recipeImage" alt="food image"></img> <br />
//                     <div className ="recipeText">
//                             Recipe Details <br />
//                             Service Size <br />
//                             Cooktime <br />
//                             Link to recipe page
//                         </div>
//                     </div>
//                 </div>
//                 <div className ="recipeContainer">
//                     <h3>Recipe Title</h3>
//                     <div className ="recipeCard">
//                     <img src="https://via.placeholder.com/150x150" className ="recipeImage" alt="food image"></img> <br />
//                         <div className ="recipeText">
//                             Recipe Details <br />
//                             Service Size <br />
//                             Cooktime <br />
//                             Link to recipe page
//                         </div>
//                     </div>
//                 </div>  
//             </div>
//         </div>
//     );
        
// };
 
// }

export default Show;