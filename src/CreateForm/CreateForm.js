import React, {Component} from 'react';
import './CreateForm.css';

class CreateForm extends Component {
    constructor(props){
      super(props);
      this.state = {inputValue: ''};
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
    render() {
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
                <input
                    className="Create-Input"
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit} className="Create-Button">
                    Add
                </button>
            </form>
        </div>
        );
    }
  }

export default CreateForm;
