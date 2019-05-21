import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Show from './Show/Show';
import About from './About/About';
import CreateForm from './CreateForm/CreateForm';
import Recipe from './Recipe/Recipe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
      <main>
        <Switch>
          <Route exact path= "/" component={About} />
          <Route exact path="/api/recipes" component={Show}/>
          <Route exact path="/api/recipes/:recipeID" render= {(routerProps) => <Recipe {...routerProps}/>}/>
          <Route exact path="/recipes/create" render= {(routerProps) => <CreateForm {...routerProps}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
