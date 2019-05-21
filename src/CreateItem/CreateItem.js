import React, { Component } from 'react';
import './CreateItem.css'

class CreateItem extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="ingredientsInput">
                <input
                    className="Create-Input ingredientAmt"
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    name="ingredientAmount"
                    placeholder="Amount"
                />
                <input
                    className="Create-Input ingredientItem"
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    name="ingredientItem"
                    placeholder="Ingredient"
                />
                </div>
        );
    }
}

export default CreateItem;