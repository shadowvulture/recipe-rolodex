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
    }
    handleChange = evt => {
      this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = evt => {
      evt.preventDefault()
      console.log(this.state)

      this.props.newRecipe(this.state)
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
                    type="text"
                    name="Title"
              value={this.state.value}
              onChange={this.handleChange}

              placeholder="Recipe Name"
              />
                <input
                    className="Create-Input"
                    type="text"
                    name="Thumbnail"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Recipe Image URL"
                    />
                <input
                    className="Create-Input"
                    type="text"
                    name="cooktime"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Estimated Cooking Time"
                    />
                <input
                    className="Create-Input"
                    type="text-area"
                    name="Instructions"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="Instructions"
                    />
                <ul className="IngredientModifierButtons">
                  <button className="button buttonMinus" onClick={this.decreaseingredientField}> - </button>
                  <button className="button buttonPlus" onClick={this.increaseingredientField}> + </button>
                </ul>
                <div className="ingredientList">
                  <IngredientList counter={this.state.ingredientField}/>
                </div>
                <button className="Create-Button" type='submit'>
                    Add
                </button>
            </form>
        </div>
        );
      }
    }

export default CreateForm;
