import React from 'react';
import './App.css';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
      </header>
    </div>
  );
}

export default App;
