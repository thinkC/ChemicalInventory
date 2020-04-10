import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from './InventoryItem';
import axios from 'axios';
// import Moment from 'react-moment';
// import moment from 'moment';


export default class InventoryList extends Component {
    constructor(props) {
        super(props);
        this.deleteInventory = this.deleteInventory.bind(this);

        this.state = { inventories: [] };
        //console.log(this.state)
    }

    componentDidMount() {
        axios.get('http://localhost:5000/inventories/')
            .then(response => {
                this.setState({ inventories: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    //delete inventory
    deleteInventory(id) {
        axios.delete('http://localhost:5000/inventories/' + id)
            .then(res => console.log(res.data));
        this.setState({
            inventories: this.state.inventories.filter(item => item._id !== id)
        })
    }
    inventoryList() {
        return this.state.inventories.map(curentInventory => {
            return <InventoryItem inventory={curentInventory} deleteInventory={this.deleteInventory} key={curentInventory._id} />
        })
    }
    render() {

        return (
            <div>
                {/* <InventoryItem inventoryListA={this.inventoryList()} /> */}
                {/* <InventoryItem inventoryListA={this.state.inventories}/> */}
                {this.inventoryList()}

            </div>

        )
    }
}