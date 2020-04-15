import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from './InventoryItem';
import axios from 'axios';
import InventorySumary from './InventorySumary';

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
        //console.log(this.state.inventories)
        return this.state.inventories.map(curentInventory => {
            return <InventoryItem inventories={this.state.inventories} inventory={curentInventory} deleteInventory={this.deleteInventory} key={curentInventory._id} />
        })
    }

    // totInventoryAndtotExp = ()=>{

    // }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">

                        <InventorySumary inventories={this.state.inventories} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {this.inventoryList()}
                    </div>

                </div>

            </div>



        )
    }
}