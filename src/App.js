import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import "./components/Menucomponents"
import Menu from './components/Menucomponents';

function App() {
  return (
    <div>
      
        <Navbar dark color ="primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
        
     
    </div>
  );
}

export default App;
