const db = require("../models");
const SubCategory = db.sub_categories;
const product_sub_category = db.product_sub_category;

exports.addSubCategory = function (req, res) {
    if (!req.body.name || !req.body.description || !req.body.cat_id) {
        res.status(400).send({
            message: "Name and description can not be empty!"
        });
        return;
    }

    const subcategory = {
        name: req.body.name,
        description: req.body.description,
        cat_id: req.body.cat_id
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

exports.deleteSubCategory = function (req, res) {
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

exports.updateSubCategory = function (req, res) {
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
}