import React from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to= "/">
                    <h1>Recipe Rolodex</h1>
                </NavLink>
                <NavLink to= "/create">
                    <i className="fas fa-plus"></i>
                    <h2>Create New Recipe</h2>
                </NavLink>
            </nav>  
        </div>
    );
};

export default Navbar;