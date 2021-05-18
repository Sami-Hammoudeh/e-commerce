const db = require("../models");
const product = require("../models/product");
const Product = db.products;

exports.addProduct = function (req, res) {
// Validate request
if (!req.body.id || !req.body.name || !req.body.price || !req.body.description || !req.body.stock || !req.body.published || !req.body.color) {
    res.status(400).send({
        message: "Id, Name, Price, description, stock, published and color can not be empty!"
    });
    return;
}
// Create an Products
const product = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
    color: req.body.color
};
// Save Product in the database
Product.create(Product)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating a new Product."
        });
    });
}

exports.getProduct = function (req, res) {
    Product.findByPk(req.params.id)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving the Product " + req.params.id + "."
        });
    });

}

exports.getAllProducts = function (req, res) {
    product.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Products."
        });
    });
}

exports.deleteAllProducts = function (req, res) {
    Product.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({
                message: `${num} Products were deleted successfully!`
            });

        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Products"
            });
        });
}

exports.deleteProduct = function (req, res) {
    const id = req.params.id;
    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Product with id ${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Product with id " + id
            });
        });
}

exports.updateProduct = function (req, res) {
    const id = req.params.id;
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Product with id=${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Product with id=${id}`
            });
        });
}