import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './Show.css';

class Show extends Component {
    constructor (props) {
        super (props);
        
        
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
           <h3>{item.Title}</h3>
                <div className="recipeCard">
           <img src={item.Thumbnail} alt="foot image" className="recipeImage"></img>
           <div className="recipeText">
               <p>Cooketime: {item.Cooktime}</p>
               <p>Instructions: {item.Instructions}</p>
               </div>
                </div>
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