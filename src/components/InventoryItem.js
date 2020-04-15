import React from 'react';
import InventoryList from './InventoryList'
import { Link } from 'react-router-dom';
import DetailInventory from './DetailInventory';
import Search from './Search';
// import Moment from 'react-moment';
// import moment from 'moment';



const InventoryItem = (props) => {
    //console.log(props)
    const { inventory, deleteInventory, inventories } = props;


    const calTotal = (a, b) => {
        //return parseInt(a) - parseInt(b)
        return parseInt(a - b)
    }

    const notificationColor = () => {
        if ((calTotal(inventory.initialquantity, inventory.requestedquantity)) > parseInt(inventory.initialquantity) * 0.7) {
            //mm.style.backgroundColor= 'notification-good'
            return 'btn-success'
        }
        if ((calTotal(inventory.initialquantity, inventory.requestedquantity)) > 30) {
            //mm.style.backgroundColor= 'notification-good'
            return 'btn-warning'
        }
        if ((calTotal(inventory.initialquantity, inventory.requestedquantity)) < 30) {
            //mm.style.backgroundColor= 'notification-good'
            return 'btn-danger'
        }

    }

    const getDateDiff = (date1, date2) => {
        const daysCount = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
        //console.log(daysCount);
        return daysCount;
    }

    const expireNotification = () => {
        if (getDateDiff(new Date(inventory.manufacturedate), new Date(inventory.expiredate)) > 90) {
            return 'btn-success'
        }
        if (getDateDiff(new Date(inventory.manufacturedate), new Date(inventory.expiredate)) >= 1 && getDateDiff(new Date(inventory.manufacturedate), new Date(inventory.expiredate) <= 61)) {
            return 'btn-warning'
        }
        if (getDateDiff(new Date(inventory.manufacturedate), new Date(inventory.expiredate)) <= 0) {
            return 'btn-danger'
        }
    }

    // const putObjInArr = (obj) => {

    //     for (let i = 0; i <= 4; i++) {
    //         newArr.push(obj)
    //     }
    //     return newArr;
    // }





    //getTotalIventory(inventory)
    return (
        <div>

            {/* <Search inventories={inventories} /> */}
            <div className="card mt-5" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">Chemical Nam: {inventory.inventoryname}</h5>
                    <p className="card-text">Total Remaining: {inventory.totalremaining}</p>
                    {/* <p className="card-text">Initial Quantity: {inventory.initialquantity}</p> */}
                    {/* Total Remaining: {" "} {calTotal(inventory.initialQtyValue, inventory.reqQtyValue)} */}
                    {/* <p className="card-text">Requested Quantity: {inventory.requestedquantity}</p> */}
                    <p className="card-text">LOT Number: {inventory.lotnumber}</p>
                    {/* <p className="card-text">Manufacture Date: {inventory.manufacturedate.substring(0, 10)}</p>
                <p className="card-text">Expire Date: {inventory.expiredate.substring(0, 10)}</p>
                <p className="card-text">Manifest ID: {inventory.manifestid}</p> */}

                    <p className="card-text">Country: {inventory.country}</p>

                    <Link to={"/detail/" + inventory._id}><button className="btn btn-primary">View Details</button></Link>
                    <button className={notificationColor()}>QTY</button>
                    <button className={expireNotification()}>EXP</button>
                </div>
                {/* <DetailInventory inventory={curentInventory} deleteInventory={deleteInventory} /> */}
            </div>
        </div>


    )
}

export default InventoryItem;