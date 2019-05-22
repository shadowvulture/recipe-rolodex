import React, { Component } from 'react';
import './CreateItem.css'

class CreateItem extends Component {
    constructor(props){
        super(props)
        this.state = {        }
    }
    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value })
      }
    render() {
        return (
            <div className="ingredientsInput">
                <input
                    className="Create-Input ingredientAmt"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name='FoodAmount'
                    placeholder="Amount and Measurement"
                />
                <input
                    className="Create-Input ingredientItem"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    name='FoodType'
                    placeholder="Ingredient"
                />
                </div>
        );
    }
}

export default CreateItem;
