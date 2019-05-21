import React from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './Show.css';

const Show = () => {
    return (
        <div>
            <div className ="topRow">
                <div className ="recipeContainer">
                    <h3>Recipe Title</h3>
                    <div className ="recipeCard">
                    <img src="https://via.placeholder.com/150x150" alt="food image"></img> <br />
                    Recipe Details <br />
                    Service Size <br />
                    Cooktime <br />
                    Link to recipe page
                    </div>
                </div>
                <div className ="recipeContainer">
                    <h3>Recipe Title</h3>
                    <div className ="recipeCard">
                    <img src="https://via.placeholder.com/150x150" alt="food image"></img> <br />
                    Recipe Details <br />
                    Service Size <br />
                    Cooktime <br />
                    Link to recipe page
                    </div>
                </div>  
                <div className ="recipeContainer">
                    <h3>Recipe Title</h3>
                    <div className ="recipeCard">
                    <img src="https://via.placeholder.com/150x150" alt="food image"></img> <br />
                    Recipe Details <br />
                    Service Size <br />
                    Cooktime <br />
                    Link to recipe page
                    </div>
                </div>  
                <div className ="recipeContainer">
                    <h3>Recipe Title</h3>
                    <div className ="recipeCard">
                    <img src="https://via.placeholder.com/150x150" alt="food image"></img> <br />
                    Recipe Details <br />
                    Service Size <br />
                    Cooktime <br />
                    Link to recipe page
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Show;