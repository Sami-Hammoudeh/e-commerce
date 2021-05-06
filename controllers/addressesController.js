const db = require("../models");
const Address = db.addresses;

exports.addAddress = function (req, res) {

}

exports.getAddress = function (req, res) {

}

exports.getAllAddresses = function (req, res) {
    Address.findAll({
        attributes: ['content', ['deletedAt','deleteDate']],
        order: [['createdAt', 'DESC']],
        include: [
          { 
            model: User, // load all users data
            attributes: ['username']  
          },
        ],
        //paranoid: false //to retrieve even the deleted records
     })
       .then(data => {
         res.send({
           'data': data,
           'message': "Addresses retrieved successfully",
           'status': 200
         });
       })
       .catch(err => {
         res.status(500).send({
           message:
             err.message || "Some error occurred while retrieving Addresses."
         });
       });
    }

exports.deleteAllAddresses = function (req, res) {

}

exports.deleteAddress = function (req, res) {

}

exports.updateAddress = function (req, res) {

}