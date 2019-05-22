// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar/Navbar';
import Show from './Show/Show';
import About from './About/About';
import CreateForm from './CreateForm/CreateForm';
import Recipe from './Recipe/Recipe'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      allRecipes: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  newRecipe (input) {
    axios.post('https://reactreciperolodex.herokuapp.com/api/recipe/new-recipe', input).then(res => {
      console.log(res)
    })
  }

  componentDidMount () {
    axios.get('https://reactreciperolodex.herokuapp.com/api/recipe/recipes')
      .then((res) => {
        console.log(res)
        this.setState({
          allRecipes: res.data
        }, () => {
          console.log('after', this.state)
        })
      })
      .catch((err) => {
        console.log(err)

      })
      console.log('before', this.state)
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <Switch>
          <Route exact path= "/" component={About} />
          <Route exact path="/api/recipes" render={(routerProps) => <Show {...routerProps} {...this.state} />} />
          {/* <Route exact path="/api/recipes/:recipeID" render= {(routerProps) => <Recipe {...routerProps}/>}/> */}
            <Route exact path="/api/recipe/new-recipe" render={( routerProps ) =>
              <CreateForm
              {...this.state}
              newRecipe={this.newRecipe}/>}/>
        </Switch>
      </main>
    </div>
  );
}
  }

export default App;
