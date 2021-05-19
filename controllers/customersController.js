const db = require("../models");
const Customer = db.customers;

exports.addCustomer = function (req, res) {
   
        if (!req.body.id || !req.body.email || !req.body.password || !req.body.first_name || !req.body.	last_name) {
        res.status(400).send({
            message: "id, email, password, first_name and last_name can not be empty!"
        });
        return;
    }
    
    const customer = {
        
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.firstname,
        last_name: req.body.last_name
    
    };
    
    Customer.create(customer)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new customer."
            });
        });
    }


exports.getCustomer = function (req, res) {
    Customer.findByPk(req.params.id)
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
                err.message || "Some error occurred while retrieving Customer."
        });
    });
}

exports.deleteAllCustomers = function (req, res) {
    Customer.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({
                message: `${num} Categories were deleted successfully!`
            });
    
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Categories"
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
                    message: `Cannot delete Customer with id ${id}. Maybe Customer found!`
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