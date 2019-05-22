import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className = "background">
            <img src="https://via.placeholder.com/650x150" className="mainLogo"alt="Recipe Rolodex Logo"></img>
            {/* <img src="../rustic-vegan.jpg" className="mainLogo"alt="Recipe Rolodex Logo"></img> */}
            <div className="about">
           <p className = "desc">
               Recipe Rolodex is a place where users store their favorite recipes in a digital space. Having all your recipes in one place makes it very easy to search through your recipes. Convert Grandma’s time honored-recipes into your own digital recipe repository where they can be cherished forever.
           </p> 
           </div>
           <div className ="showAll">
                <Link to ="/api/recipes">
                <p className="showAllText">
                Show All Recipes
                </p>
                </Link>
           
           </div>
           </div>
        </div>
    );
};

export default About;

