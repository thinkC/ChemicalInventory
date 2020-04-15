import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import InventoryList from './components/InventoryList';
import EditInventory from './components/EditInventory';
import CreateInventory from './components/CreateInventory';
import DetailInventory from './components/DetailInventory';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route exact path="/" component={InventoryList} />
      <Route path="/edit/:id" component={EditInventory} />
      <Route path="/create" component={CreateInventory} />
      <Route path="/detail/:id" component={DetailInventory} />
      {/* <div>
        <h1>Hello from App</h1>
      </div> */}
    </Router>
  );
}

export default App;
