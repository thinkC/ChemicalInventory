const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    inventoryname: { type: String, required: true },
    inventorycode: { type: String, required: true },
    lotnumber: { type: String, required: true },
    manufacturedate: { type: Date, required: true },
    expiredate: { type: Date, required: true },
    initialquantity: { type: Number, required: true },
    requestedquantity: { type: Number, required: false },
    totalremaining: { type: Number, required: false },
    country: { type: String, required: true },
    manifestid: { type: String, required: false },
}, {
    timestamps: true,
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;


