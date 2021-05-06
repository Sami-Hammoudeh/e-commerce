const db = require("../models");
const Address = db.addresses;

exports.addAddress = function (req, res) {

}

exports.getAddress = function (req, res) {

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

}

exports.updateAddress = function (req, res) {

}