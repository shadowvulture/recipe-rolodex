import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './NavBar.css'
class NavBar extends Component {
    render() {
        let navBarItems = [
         <NavItem key={1} href='/'>Recipe Rolodex</NavItem>,
            <NavItem key={2} href='/api/recipes'>Show All Recipes</NavItem>,
            <NavItem key={3} href='/api/recipes/new-recipe'>Create Recipe</NavItem>
    ]
        if (this.props.isLoggedIn) {
            navBarItems.push(<NavItem key={4} href='/logout'>Log Out</NavItem>)
        } else {
            navBarItems.push(<NavItem key={5} href='/signup'>Sign Up</NavItem>)
            navBarItems.push(<NavItem key={6} href='/login'>Log In</NavItem>)
        }
        return(
            <Navbar brand='Recipe Rolodex' className="navbar" right>
                {navBarItems}
            </Navbar>
        )
    }
}

export default NavBar

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { NavBar, NavItem} from 'react-materialize'
// import './Navbar.css';
// import { Component } from 'react';

// class Navbar extends Component
// {
//     render ()
//     {
//         <div>
//             <nav className="navbar">
//                 let navBarItems = [
//                 <NavItem key={1} href="/">
//                     <h1><i class="material-icons md-24">tab</i>Recipe Rolodex</h1>
//                 </NavItem>
//                 <NavItem key={2} href="/api/recipes">
//                     <h2>Show All Recipes</h2>
//                 </NavItem>
//                 <NavItem key={3} href="/recipes/create">
//                     <h2>Create New Recipe</h2>
//                 </NavItem>
//                 ]
//                 if (this.props.isLoggedIn) {
//             navBarItems.push(<NavItem key={4} href='/logout'>Log Out</NavItem>)
//         } else {
//             navBarItems.push(<NavItem key={5} href='/signup'>Sign Up</NavItem>)
//             navBarItems.push(<NavItem key={6} href='/login'>Log In</NavItem>)
//         }
//         return(
//             <Navbar brand='Walk It Out' className="nav" right>
//                 {navBarItems}
//             </Navbar>
//         )

//                 }

//             </nav>
//         </div>

//     };
// }

// export default Navbar;

// let navBarItems = [<NavItem key={1} href='/'>All Dogs</NavItem>]
// if (this.props.isLoggedIn) {
//     navBarItems.push(<NavItem key={2} href='/logout'>Log Out</NavItem>)
// } else {
//     navBarItems.push(<NavItem key={3} href='/signup'>Sign Up</NavItem>)
//     navBarItems.push(<NavItem key={4} href='/login'>Log In</NavItem>)
// }
