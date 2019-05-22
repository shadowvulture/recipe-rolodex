import React, {Component} from 'react';
import './CreateForm.css';
import IngredientList from './IngredientList';

class CreateForm extends Component {
    constructor(props){
      super(props);
      this.state = {
          inputValue: '',
          ingredientField: 3
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
      e.preventDefault();
      this.setState({
        inputValue: e.target.value
      });
    }
    handleSubmit(e){
      e.preventDefault();
      console.log(this.state)
    }
    increaseingredientField = () => {
        let ingredientField = this.state.ingredientField + 1;
        this.setState({
            ingredientField
        });
        console.log(this.state.ingredientField)
    }

    decreaseingredientField = () => {
        let ingredientField = this.state.ingredientField - 1;

        this.setState({
            ingredientField
        });
        console.log(this.state.ingredientField)
    }
    render() {
      return (
            <div className="Create">
            <h2>Add a New Recipe</h2>
            <form className="Create-Form" onSubmit={this.handleSubmit}>
                <input 
                    className="Create-Input" 
                    type="text" name="title"
                    placeholder="Recipe Name"
                />
                <input 
                    className="Create-Input" 
                    type="text" 
                    name="thumbnail"
                    placeholder="Recipe Image URL"
                    />
                <input 
                    className="Create-Input" 
                    type="text" 
                    name="cooktime"
                    placeholder="Estimated Cooking Time"
                    />
                <input 
                    className="Create-Input" 
                    type="text" 
                    name="instructions"
                    placeholder="Instructions"
                    />
                <ul className="IngredientModifierButtons">
                  <button className="button buttonMinus" onClick={this.decreaseingredientField}> - </button>
                  <button className="button buttonPlus" onClick={this.increaseingredientField}> + </button>
                </ul>
                <div className="ingredientList">
                  <IngredientList counter={this.state.ingredientField}/>
                </div>
                <button className="Create-Button">
                    Add
                </button>
            </form>
        </div>
        );
    }
  }

export default CreateForm;
