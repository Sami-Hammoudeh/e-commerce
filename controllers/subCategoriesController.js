const db = require("../models");
const SubCategory = db.sub_categories;
exports.addSubCategory = function (req, res) {
    if (!req.body.id || !req.body.name || !req.body.descrption) {
    res.status(400).send({
        message: "id,name and descrption can not be empty!"
    });
    return;
}

const subcategory = {
    
    id: req.body.id,
    name: req.body.name,
    description: req.body.description

};

SubCategory.create(subcategory)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating a new SubCategory."
        });
    });
}


exports.getSubCategory = function (req, res) { 
    SubCategory.findByPk(req.params.id)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving the SubCategory" + req.params.id + "."
        });
    });
}



exports.getAllSubCategories = function (req, res) {
    SubCategory.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Subcategory."
        });
    });
}



exports.deleteAllSubCategories = function (req, res) {
    SubCategory.destroy({
    where: {},
    truncate: false
})
    .then(num => {
        res.send({
            message: `${num} SubCategories were deleted successfully!`
        });

    })
    .catch(err => {
        res.status(500).send({
            message: "Error deleting SubCategories"
        });
    });
}




exports.deleteSubCategory= function (req, res) {
    const id = req.params.id;
    SubCategory.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SubCategory was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete SubCategory with id ${id}. Maybe SubCategory found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting SubCategory with id " + id
            });
        });
}



exports.updateSubCategory= function (req, res) {
    const id = req.params.id;

    SubCategory.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "SubCategory was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the SubCategory with id=${id}. Maybe SubCategory was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating SubCategory with id=${id}`
            });
        });
        exports.getAllProducts = function (req, res) {
            product.findAll({
                where:{subcategory_id:req.params.id}
                
            })
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
              { subcategory_id: null },
                    {
                        fields: ['subcategory_id'],
                where: { id: req.body.id}
            })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "Product was deleted successfully."
                        });
                    } else {
                        res.send({
                            message: `Cannot delete the Product with id=${id}. Maybe Product was not found!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).send({
                        message: `Error deleting Product with id=${id}`
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
                  { subcategory_id: req.params.id },
                        {
                            fields: ['subcategory_id'],
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
        
}

