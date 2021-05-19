const db = require("../models");
const brand = require("../models/brand");
const Brand = db.brands;

exports.addBrand = function (req, res) {
  // Validate request
  if (!req.body.id || !req.body.name || !req.body.description) {
    res.status(400).send({
        message: "Id, Name and description can not be empty!"
    });
    return;
}
// Create an Brands
const brand = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description
};
// Save Brand in the database
Brand.create(brand)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating a new Brand."
        });
    });
}

exports.getBrand = function (req, res) {
    Brand.findByPk(req.params.id)
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Brand " + req.params.id + "."
            });
        });

}

exports.getAllBrands = function (req, res) {
    brand.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Brands."
        });
    });
}

exports.deleteAllBrands = function (req, res) {
    Brand.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({
                message: `${num} Brands were deleted successfully!`
            });

        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Brands"
            });
        });
}

exports.deleteBrand = function (req, res) {
    const id = req.params.id;
    Brand.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Brand was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Brand with id ${id}. Maybe Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Brand with id " + id
            });
        });
}

exports.updateBrand = function (req, res) {
    const id = req.params.id;

    Brand.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Brand was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Brand with id=${id}. Maybe Brand was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Brand with id=${id}`
            });
        });
}

exports.addProduct = function (req, res) {
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
        Product.update(
          { brand_id: req.params.id },
                {
                    fields: ['brand_id'],
            where: { id: req.body.id}
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

exports.deleteProduct = function (req, res) {
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
    Product.update(
      { brand_id: null },
            {
                fields: ['brand_id'],
        where: { id: req.body.id}
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

exports.getAllProducts = function (req, res) {
    brand.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Brands."
        });
    });
}