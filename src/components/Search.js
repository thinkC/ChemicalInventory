import React, { Component } from 'react'
import InventoryItem from './InventoryItem'


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.SearchInventory = this.SearchInventory.bind(this);

        this.state = { search: '' };
        //console.log(this.state)
    }

    SearchInventory = (props) => {
        const { search } = this.state;
        const { inventories } = props;
        console.log(inventories)
        // if (search !== '' && inventor.inventoryname.tolowerCase().indexOf(search.toLocaleLowerCase() === -1)) {
        //     return null;
        // }
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }


    render() {

        return (
            <div>
                <input type="text" icon="search" placeholder="search" onChange={this.handleSearch} />
            </div>
        )
    }
}
