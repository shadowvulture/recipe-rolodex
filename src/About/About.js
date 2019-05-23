import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className = "background"></div>
            <div className="largeLogo">
                <h1>Recipe Rolodex</h1>
            </div>
            <div className="about-text">
               <p>Recipe Rolodex is a place where users store their favorite recipes in a digital space. Having all your recipes in one place makes it very easy to search through your recipes. Convert Grandma’s time honored-recipes into your own digital recipe repository where they can be cherished forever.
                </p> 
            </div>
        </div>
    );
};

export default About;

