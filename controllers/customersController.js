const db = require("../models");
const bcrypt = require('bcrypt');
const Customer = db.customers;

exports.getCustomer = function (req, res) {
    Customer.findOne({where:{id:req.params.id}})
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Customer" + req.params.id + "."
            });
        });
}

exports.getAllCustomers = function (req, res) {
    Customer.findAll()
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Customers."
            });
        });
}

exports.deleteAllCustomers = function (req, res) {
    Customer.destroy({
        where: {}
    })
        .then(num => {
            res.send({
                message: `${num} Customers were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Customers"
            });
        });
}

exports.deleteCustomer = function (req, res) {
    const id = req.params.id;
    Customer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id ${id}. Maybe Customer not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Customer with id " + id
            });
        });
}

exports.updateCustomer = function (req, res) {
    const id = req.params.id;
    if (req.body.id) return res.status(400).send("Cannot update id");
    if (req.body.password) return res.status(400).send("Cannot update password from here");
    Customer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Customer with id=${id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Customer with id=${id}`
            });
        });
}

exports.changePassword = async function (req, res) {
    const id = req.params.id;
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    Customer.update(
        { password: await bcrypt.hash(req.body.password, salt) },
        {
            fields: ['password'],
            where: { id: id }
        }
    )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customers password was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot change the password to Customer with id=${id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error changing password to Customer with id=${id}`
            });
        });
}