const router = require('express').Router();
let Inventory = require('../models/inventory.model');


router.route('/').get((req, res) => {
    Inventory.find()
        .then(inventories => res.json(inventories))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const inventoryname = req.body.inventoryname;
    const inventorycode = req.body.inventorycode;
    const lotnumber = req.body.lotnumber;
    const manufacturedate = Date.parse(req.body.manufacturedate);
    const expiredate = Date.parse(req.body.expiredate);
    const initialquantity = Number(req.body.initialquantity);
    const requestedquantity = Number(req.body.requestedquantity);
    const totalremaining = Number(req.body.totalremaining);
    const country = req.body.country;
    const manifestid = req.body.manifestid;

    const newInventory = new Inventory({
        inventoryname,
        inventorycode,
        lotnumber,
        manufacturedate,
        expiredate,
        initialquantity,
        requestedquantity,
        totalremaining,
        country, manifestid
    });
    //console.log(expiredate)
    newInventory.save()
        .then(() => res.json('Inventory added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Inventory.findById(req.params.id)
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(() => res.json('Inventory deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Inventory.findById(req.params.id)
        .then(inventory => {
            inventory.inventoryname = req.body.inventoryname;
            inventory.inventorycode = req.body.inventorycode;
            inventory.lotnumber = req.body.lotnumber;
            inventory.manufacturedate = Date.parse(req.body.manufacturedate);
            inventory.expiredate = Date.parse(req.body.expiredate);
            inventory.initialquantity = Number(req.body.initialquantity);
            inventory.requestedquantity = Number(req.body.requestedquantity);
            inventory.totalremaining = Number(req.body.totalremaining);
            inventory.country = req.body.country;
            inventory.manifestid = req.body.manifestid;


            inventory.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;