import React from 'react';
import './App.css';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar'
import Show from './Show/Show'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <Switch>
          <Route exact path= "/api/" component={About} />
          <Route exact path="/api/recipes/:recipeID" render= {(routerProps) => <Show {...routerProps}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
