import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';


export default class DetailInventory extends Component {
    constructor(props) {
        super(props);

        this.state = { inventories: '' };

    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:5000/inventories/' + id)
            .then(res => {
                this.setState({
                    inventories: res.data
                })
                console.log(res)
            })

    }

    // calTotal = (a, b) => {
    //     //return parseInt(a) - parseInt(b)
    //     return parseInt(a - b)
    // }


    //delete inventory
    deleteInventory(id) {
        axios.delete('http://localhost:5000/inventories/' + id)
            .then(res => console.log(res.data));
        this.setState({
            inventories: ''
            //inventories: this.state.inventories.filter(item => item._id !== id)
        })
        window.location = '/';

    }


    // componentDidMount() {
    //     axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
    //       .then(response => {
    //         this.setState({
    //           username: response.data.username,
    //           description: response.data.description,
    //           duration: response.data.duration,
    //           date: new Date(response.data.date)
    //         })   
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       })




    render() {
        return (
            <div className="card card-top" >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h5 className="card-title">Chemical Name: {this.state.inventories.inventoryname}</h5>


                    <p className="card-text">Initial Quantity: {this.state.inventories.initialquantity}</p>
                    <p className="card-text">Requested Quantity: {this.state.inventories.requestedquantity}</p>
                    <p className="card-text">LOT Number: {this.state.inventories.lotnumber}</p>
                    <p className="card-text">Manufacture Date:{this.state.inventories.manufacturedate} </p>
                    <p className="card-text">Expire Date: {this.state.inventories.expiredate}</p>
                    <p className="card-text">Manifest ID: {this.state.inventories.manifestid}</p>
                    <p className="card-text">Total Remaining: {this.state.inventories.totalremaining}</p>
                    {/* <p className="card-text">Total Remaining: {" "} {this.calTotal(this.state.inventories.initialquantity, this.state.inventories.requestedquantity)}</p> */}
                    <p className="card-text">Country: {this.state.inventories.country}</p>


                    <button onClick={() => { this.deleteInventory(this.state.inventories._id) }} className="btn btn-danger">Delete</button> | <Link to={"/edit/" + this.state.inventories._id}><button className="btn btn-info">Edit</button></Link>
                </div>
            </div>
        )
    }
}











































// export default class DetailInventory extends Component {
//     constructor(props) {
//         super(props);
//         this.deleteInventory = this.deleteInventory.bind(this);

//         this.state = { inventories: [] };
//         //console.log(this.state)
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/inventories/')
//             .then(response => {
//                 this.setState({ inventories: response.data })
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }

//     //delete inventory
//     deleteInventory(id) {
//         axios.delete('http://localhost:5000/inventories/' + +this.props.match.params.id)
//             .then(res => console.log(res.data));
//         this.setState({
//             inventories: this.state.inventories.filter(item => item._id !== id)
//         })
//     }
//     // inventoryList() {
//     //     return this.state.inventories.map(curentInventory => {
//     //         return <InventoryItem inventory={curentInventory} deleteInventory={this.deleteInventory} key={curentInventory._id} />
//     //     })
//     // }
//     render() {
//         const inventoryItems = this.state.inventories.length ? (
//             this.state.inventories.map((inventory) => {
//                 return (
//                     <div className="card card-top" key={inventory._id}>
//                         {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
//                         <div className="card-body">
//                             <h5 className="card-title">Chemical Name: {inventory.inventoryname}</h5>


//                             <p className="card-text">Initial Quantity: {inventory.initialquantity}</p>
//                             <p className="card-text">Requested Quantity: {inventory.requestedquantity}</p>
//                             <p className="card-text">LOT Number: {inventory.lotnumber}</p>
//                             <p className="card-text">Manufacture Date: {inventory.manufacturedate.substring(0, 10)}</p>
//                             <p className="card-text">Expire Date: {inventory.expiredate.substring(0, 10)}</p>
//                             <p className="card-text">Manifest ID: {inventory.manifestid}</p>
//                             <p className="card-text">Total Remaining: {inventory.totalremaining}</p>
//                             <p className="card-text">Country: {inventory.country}</p>


//                             <button onClick={() => { this.deleteInventory(inventory._id) }} className="btn btn-danger">Delete</button> | <Link to={"/edit/" + inventory._id}><button className="btn btn-info">Edit</button></Link>
//                         </div>
//                     </div>
//                 )
//             })
//         ) : (null)
//         return (
//             <div className="container">
//                 {inventoryItems}



//             </div>

//         )
//     }
// }



















