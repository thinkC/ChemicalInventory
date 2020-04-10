import React from 'react';
import InventoryList from './InventoryList'
import { Link } from 'react-router-dom';

const InventoryItem = (props) => {
    console.log(props)
    const { inventory, deleteInventory } = props;
    return (
        <div className="container" >
            <ul>
                <li><h5>Chemical Name: {inventory.inventoryname}</h5></li>
                <li>Chemical Code: {inventory.inventorycode}</li>

                <li>Initial Quantity: {inventory.initialquantity}</li>
                <li>Requested Quantity: {inventory.requestedquantity}</li>
                <li>LOT Number: {inventory.lotnumber}</li>
                <li>Manufacture Date: {inventory.manufacturedate.substring(0, 10)}</li>
                <li>Expire Date: {inventory.expiredate.substring(0, 10)}</li>
                <li>Manifest ID: {inventory.manifestid}</li>
                <li>Total Remaining: {inventory.totalremaining}</li>
                <li>Country: {inventory.country}</li>

            </ul>
            <button onClick={() => { deleteInventory(inventory._id) }} className="btn btn-danger">Delete</button> | <Link to={"/edit/" + inventory._id}><button className="btn btn-info">Edit</button></Link>
        </div>

    )
}

export default InventoryItem;