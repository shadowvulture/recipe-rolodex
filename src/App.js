// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios'
import NavBar from './NavBar/NavBar';
import Show from './Show/Show';
import About from './About/About';
import CreateForm from './CreateForm/CreateForm';
import Update from './Update/Update'
import Recipe from './Recipe/Recipe'
import SignUpForm from './AuthenticateUser/SignUpForm'
import LogOut from './AuthenticateUser/LogOut'
import LogInForm from './AuthenticateUser/LogInForm'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      allRecipes: [],
      email: '',
      password: '',
      isLoggedIn: false
    }
  }

  newRecipe = (input) => {
    axios.post('https://reactreciperolodex.herokuapp.com/api/recipe/new-recipe', input).then(res => {
      console.log(res)
    })
  }

  refreshData = () => {
    axios.get('https://reactreciperolodex.herokuapp.com/api/recipe/recipes')
    .then((res) => {
      console.log(res)
      this.setState({
        allRecipes: res.data
      }, () => {
        // console.log('after', this.state)
      })
    })
    .catch((err) => {
      console.log(err)

    })

  }

  componentDidMount = () => {
    this.refreshData()
      // console.log('before', this.state)
      if (localStorage.token) {
        this.setState({
          isLoggedIn: true,
        })
      } else {
        this.setState({
          isLoggedIn: false
        })
      }
  }

  //  Logic interpreted from walk-it-out-front-end
  handleLogIn = (e) => {
    e.preventDefault()
    axios.post('https://reactreciperolodex.herokuapp.com/api/user/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then( response =>
      {
          console.log(response)
        localStorage.token = response.data
        this.setState( {
              isLoggedIn: true
            })
        })
        .catch(err => console.log(err))
  }

  handleSignUp = ( e ) => {
    e.preventDefault()
    axios.post( 'https://reactreciperolodex.herokuapp.com/api/user/register', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    } )
      .then( response =>
      {
        console.log(response.data)
        localStorage.setItem( 'token', response.data.data )
        this.setState( {
          // isLoggedIn: true
        } )
      } )
      .catch( err => console.log( err ) )
  }

  handleInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleLogOut = () => {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }



  render ()
  {
    // const createFormMarkUp = <CreateForm {...this.state} newRecipe={this.newRecipe} />
    console.log(this)
    return (
    <div className="App">
      <header className="App-header">
          <NavBar isLoggedIn={this.state.isLoggedIn} />
        </header>
      <main>
        <Switch>
          <Route exact path= "/" component={About} />
          <Route exact path="/api/recipes" render={(routerProps) => <Show refreshData={this.refreshData} {...this.state} />} />
          {/* <Route exact path="/api/recipes/:recipeID" render= {(routerProps) => <Recipe {...routerProps}/>}/> */}
            {/* <Route exact path="/api/recipe/new-recipe" render={( routerProps ) => <CreateForm {...routerProps} />} /> */}
            <Route exact path={`/api/recipe/update/:id`} render= {(routerProps) => <Update refreshData={this.refreshData} {...this.state} {...routerProps}/>}/>

            <Route path="/signup"
              render={(props) => {
                return(
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp}/>
                )
              }}
            />
            <Route path="/logout"
              render={(props) => {
                return(
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>
                )
              }}
            />
            <Route path="/login"
              render={(props) => {
                return(
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
          <Route exact path="/api/recipes/recipes" render={(routerProps) => <Show refreshData={this.refreshData} {...this.state} />} />
          <Route exact path={`/api/recipe/id/:id`} render= {(routerProps) => <Recipe refreshData={this.refreshData} {...this.state} {...routerProps}/>}/>
          <Route exact path={`/api/recipe/update/:id`} render= {(routerProps) => <Update refreshData={this.refreshData} {...this.state} {...routerProps}/>}/>
          <Route exact path="/api/recipes/new-recipe" render={( routerProps ) => <CreateForm {...this.state} newRecipe={this.newRecipe} />} />
          </Switch>
      </main>
    </div>
  );
}
  }


export default App;
