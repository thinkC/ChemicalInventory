import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Inventory App</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Inventory</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Inventory</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Register</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}