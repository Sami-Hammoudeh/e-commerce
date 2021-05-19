const db = require("../models");
const Category = db.categories;

exports.addCategory = function (req, res) {
    if (!req.body.id || !req.body.name || !req.body.descrption) {
    res.status(400).send({
        message: "id,name and descrption can not be empty!"
    });
    return;
}

const category = {
    
    id: req.body.id,
    name: req.body.name,
    description: req.body.description

};

Category.create(category)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating a new Category."
        });
    });
}



exports.getCategory = function (req, res) { 
    Category.findByPk(req.params.id)
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving the Category" + req.params.id + "."
        });
    });
}



exports.getAllCategories = function (req, res) {
    Category.findAll()
    .then(data => {
        res.send({
            'Data': data,
            'Status': 200
        });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving category."
        });
    });
}




exports.deleteAllCategories = function (req, res) {
    Category.destroy({
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




exports.deleteCategoryById = function (req, res) {
    const id = req.params.id;
    Category.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Category with id ${id}. Maybe Category found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Category with id " + id
            });
        });
}



exports.updateCategories= function (req, res) {
    const id = req.params.id;

    Category.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Category was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Category with id=${id}. Maybe Category was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Category with id=${id}`
            });
        });
}