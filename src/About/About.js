import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className = "background">
            
           </div>
           <div className ="showAll">
                <Link to ="/api/recipes" className="showAllButton">
                    Show All Recipes
                </Link>
           
           </div>
        </div>
    );
};

export default About;

