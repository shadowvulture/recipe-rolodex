import React, {Component} from 'react';
import './CreateForm.css';
import CreateItem from '../CreateItem/CreateItem';

class CreateForm extends Component {
    constructor(props){
      super(props);
      this.state = {
          inputValue: '',
          count: 1
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
      this.setState({
        inputValue: e.target.value
      });
    }
    handleSubmit(){
      this.props.addItem(this.state.inputValue);
    }
    increaseCount = () => {
        let count = this.state.count + 1;

        this.setState({
            count
        });
        console.log(this.state.count)
    }

    decreaseCount = () => {
        let count = this.state.count - 1;

        this.setState({
            count
        });
        console.log(this.state.count)
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
                <CreateItem/>
                <button onClick={this.handleSubmit} className="Create-Button">
                    Add
                </button>
            </form>
        </div>
        );
    }
  }

export default CreateForm;
