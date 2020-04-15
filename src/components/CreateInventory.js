import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class CreateInventory extends Component {
    constructor(props) {
        super(props);

        this.onChangeInventoryName = this.onChangeInventoryName.bind(this);
        this.onChangeInventoryCode = this.onChangeInventoryCode.bind(this);
        this.onChangeLotNumber = this.onChangeLotNumber.bind(this);
        this.onChangeManufactureDate = this.onChangeManufactureDate.bind(this);
        this.onChangeExpireDate = this.onChangeExpireDate.bind(this);
        this.onChangeInitialQuantity = this.onChangeInitialQuantity.bind(this);
        this.onChangeRequestedQuantity = this.onChangeRequestedQuantity.bind(this);
        this.onChangeTotalRemaining = this.onChangeTotalRemaining.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeManifestId = this.onChangeManifestId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            inventoryname: '',
            inventorycode: '',
            lotnumber: '',
            manufacturedate: new Date(),
            expiredate: new Date(),
            initialquantity: 0,
            requestedquantity: 0,
            totalremaining: 0,
            country: '',
            manifestid: ''

        }
    }

    onChangeInventoryName(e) {
        this.setState({
            inventoryname: e.target.value
        });
    }

    onChangeInventoryCode(e) {
        this.setState({
            inventorycode: e.target.value
        });
    }

    onChangeLotNumber(e) {
        this.setState({
            lotnumber: e.target.value
        });
    }

    onChangeManufactureDate(date) {
        this.setState({
            manufacturedate: date
        });
    }

    onChangeExpireDate(date) {
        this.setState({
            expiredate: date
        });
    }

    onChangeInitialQuantity(e) {
        this.setState({
            initialquantity: e.target.value
        });
    }

    onChangeRequestedQuantity(e) {
        this.setState({
            requestedquantity: e.target.value
        });
    }

    onChangeTotalRemaining(e) {
        this.setState({
            totalremaining: e.target.value
        });
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        });
    }

    onChangeManifestId(e) {
        this.setState({
            manifestid: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const inventory = {
            inventoryname: this.state.inventoryname,
            inventorycode: this.state.inventorycode,
            lotnumber: this.state.lotnumber,
            manufacturedate: this.state.manufacturedate,
            expiredate: this.state.expiredate,
            initialquantity: this.state.initialquantity,
            requestedquantity: this.state.requestedquantity,
            totalremaining: this.state.totalremaining,
            country: this.state.country,
            manifestid: this.state.manifestid

        }
        console.log(inventory);
        // window.location = '/';


        //using axios
        axios.post('http://localhost:5000/inventories/add', inventory)
            .then(res => console.log(res.data))

        //using fetch api
        // fetch('http://localhost:5000/inventories/add', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(inventory),
        // })
        //     .then((response) => response.json())
        //     .then((inventory) => {
        //         console.log('Success:', inventory);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h3>create new inventory</h3>
                        <form onSubmit={this.onSubmit} >
                            <div className="form-group">
                                <label htmlFor="ChemicalName" >ChemicalName</label>
                                <input type="text" className="form-control" id="ChemicalName" onChange={this.onChangeInventoryName} value={this.state.inventoryname} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="ChemicalCode">ChemicalCode</label>
                                <input type="text" className="form-control" id="ChemicalCode" onChange={this.onChangeInventoryCode} value={this.state.inventorycode} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="LOTNumber">LOTNumber</label>
                                <input type="text" className="form-control" id="LOTNumber" onChange={this.onChangeLotNumber} value={this.state.lotnumber} />

                            </div>
                            <div className="form-group">

                                <div className="form-control">
                                    <label htmlFor="ManufacturingDate">ManufactureDate</label>
                                    <DatePicker selected={this.state.manufacturedate} onChange={this.onChangeManufactureDate} />
                                </div>

                            </div>
                            <div className="form-group">
                                <div className="form-control">
                                    <label htmlFor="ExpirationDate">ExpirationDate</label>
                                    <DatePicker selected={this.state.expiredate} onChange={this.onChangeExpireDate} />

                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InitialQuantity">InitialQuantity</label>
                                <input type="number" className="form-control" id="InitialQuantity" onChange={this.onChangeInitialQuantity} value={this.state.initialquantity} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="RequestedQuantity">RequestedQuantity</label>
                                <input type="number" className="form-control" id="RequestedQuantity" onChange={this.onChangeRequestedQuantity} value={this.state.requestedquantity} />

                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="TotalRemaining">TotalRemaining</label>
                                <input type="number" className="form-control" id="TotalRemaining" onChange={this.onChangeTotalRemaining} value={this.state.totalremaining} />

                            </div> */}
                            <div className="form-group">
                                <label htmlFor="Country">Country</label>
                                <input type="text" className="form-control" id="Country" onChange={this.onChangeCountry} value={this.state.country} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="manifest">Manifest ID</label>
                                <input type="text" className="form-control" id="manifest" onChange={this.onChangeManifestId} value={this.state.manifestid} />

                            </div>
                            <div className="form-group center">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                    </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
