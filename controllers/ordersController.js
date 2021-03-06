const db = require("../models");
const Order = db.orders;



exports.addOrder = function (req, res) {

    if (!req.body.product_id || !req.body.address_id || !req.body.quantity
        || !req.body.amount || !req.body.time_date) {
        res.status(400).send({
            message: "product_id, address_id, quantity, amount, time_date can not be empty!"
        });
        return;
    }

    const order = {
        product_id: req.body.product_id,
        address_id: req.body.address_id,
        quantity: req.body.quantity,
        amount: req.body.amount,
        time_date: req.body.time_date,
    };

    Order.create(order)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a new Order."
            });
        });
}


exports.getOrder = function (req, res) {
    Order.findByPk(req.params.id)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Order" + req.params.id + "."
            });
        });
}

exports.getAllOrders = function (req, res) {
    Order.findAll()
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Order."
            });
        });
}

exports.deleteAllOrders = function (req, res) {
    Order.destroy({
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

exports.deleteOrder = function (req, res) {
    const id = req.params.id;
    Order.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Order with id ${id}. Maybe Order found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Order with id " + id
            });
        });
}

exports.updateOrder = function (req, res) {
    const id = req.params.id;

    Order.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Order with id=${id}. Maybe Order was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Order with id=${id}`
            });
        });
}