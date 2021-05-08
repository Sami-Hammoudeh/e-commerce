const { addresses } = require("../models");
const db = require("../models");
const Address = db.addresses;

exports.addAddress = function (req, res) {
    // Validate request
    if (!req.body.country || !req.body.city || !req.body.zip_code || !req.body.phone || !req.body.customer_id) {
        res.status(400).send({
            message: "Country, City, ZIP_Code, Phone and Customer_id can not be empty!"
        });
        return;
    }
    // Create an Address
    const address = {
        country: req.body.country,
        city: req.body.city,
        zip_code: req.body.zip_code,
        phone: req.body.phone,
        customer_id: req.body.customer_id,
    };
    // Save Address in the database
    Address.create(address)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new Address."
            });
        });
}

exports.getAddress = function (req, res) {
    Address.findByPk(req.params.id)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Address " + req.params.id + "."
            });
        });
}

exports.getAllAddresses = function (req, res) {
    Address.findAll()
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

exports.deleteAllAddresses = function (req, res) {

}

exports.deleteAddress = function (req, res) {
    const id = req.params.id;
    Address.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Address was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Address with id ${id}. Maybe Address was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Address with id " + id
            });
        });
}

exports.updateAddress = function (req, res) {

}