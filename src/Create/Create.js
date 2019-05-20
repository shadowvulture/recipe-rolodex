<<<<<<< Updated upstream
=======
import React from 'react';

const Create = () => {
    return (
        <div className="Create">
        <h2>Add a New Recipe</h2>
        <form className="Create-Form" onSubmit={this.handleSubmit}>
            <p>Title</p>
            <input className="Create-Input" type="text" name="title"/>
            <p>Thumbnail</p>
            <input className="Create-Input" type="text" name="thumbnail"/>
            <p>Cooktime</p>
            <input className="Create-Input" type="text" name="cooktime"/>
            <p>Instructions</p>
            <input className="Create-Input" type="text" name="instructions"/>
            <p>Ingredients</p>
            <input className="Create-Input" type="text" name="ingredients"/>
            <input className="Create-Button" type="submit" />
        </form>
    </div>
    );
};

export default Create;
>>>>>>> Stashed changes
