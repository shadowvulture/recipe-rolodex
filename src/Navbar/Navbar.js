import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink to= "/">
                    <h1><i class="material-icons md-24">tab</i>Recipe Rolodex</h1>
                </NavLink>
                <NavLink to ="/api/recipes">
                    <h2 className="show-all-recipes">Show All Recipes</h2>
                </NavLink>
                <NavLink to= "/recipes/create">
                    <h2 className="create-new-recipe">Create New Recipe</h2>
                </NavLink>
            </nav>  
        </div>
    );
};

export default Navbar;