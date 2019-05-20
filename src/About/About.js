import React from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className = "background">
            <img src="" className="mainLogo"alt="Recipe Rolodex Logo"></img>
            <img src="../rustic-vegan.jpg" className="mainLogo"alt="Recipe Rolodex Logo"></img>
            <div className="about">
           <p className = "desc">
               Recipe Rolodex is a place where users store their favorite recipes in a digital space. Having all your recipes in one place makes it very easy to search through your recipes. Convert Grandma’s time honored-recipes into your own digital recipe repository where they can be cherished forever.
           </p> 
           <div className ="showAll">
                <p className="showAllText">
                Show All Recipes
                </p>
           </div>
           </div>
           </div>
        </div>
    );
};

export default About;

