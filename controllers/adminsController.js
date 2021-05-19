const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
const db = require("../models");
const Admin = db.admins;
const User = db.users;

exports.addAdmin = async function (req, res) {
    // Validate request
    if (!req.body.email || !req.body.password || !req.body.first_name || !req.body.last_name) {
        res.status(400).send({
            message: "The email, password, first_name and last_name cannot be empty!"
        });
        return;
    }
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // Create a User
    const user = {
        role: "admin"
    };
    // Create an Admin
    const admin = {
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    // Save the user in the database
    User.create(user)
        .then(data => {
            admin.id = data.id;
            Admin.create(admin)
                .then(data => {
                    res.send({
                        id: admin.id,
                        email: admin.email,
                        password: admin.password,
                        first_name: admin.first_name,
                        last_name: admin.last_name
                    });
                })
                .catch(err => {
                    User.destroy({
                        where: { id: data.id }
                    })
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while creating the user."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
}

exports.getAdmin = function (req, res) {
    Admin.findOne({
        where: { id: req.params.id }
    })
        .then(data => {
            if (data == null) {
                throw Error("Admin Not Found!");
            }
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Admin " + req.params.id + "."
            });
        });
}

exports.getAllAdmins = function (req, res) {
    Admin.findAll()
        .then(data => {
            res.send({
                'Data': data,
                'Status': 200
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving admins."
            });
        });
}

exports.deleteAllAdmins = function (req, res) {
    Admin.destroy({
        where: { id: { [Op.not]: 1 } }
    })
        .then(num => {
            User.destroy({
                where: {
                    id: { [Op.not]: 1 },
                    role: "admin"
                }
            });
            res.send({
                message: `${num} Admins were deleted successfully!`
            });

        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Admins"
            });
        });
}

exports.deleteAdmin = function (req, res) {
    const id = req.params.id;
    Admin.destroy({
        where: {
            id: id,
            id: { [Op.not]: 1 }
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admins was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Admin with id ${id}. Maybe Admin was not found or its a MAIN ADMIN!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting Admin with id " + id
            });
        });
}

exports.updateAdmin = function (req, res) {
    const id = req.params.id;
    if (req.body.id) return res.status(400).send("Cannot update id");
    if (req.body.password) return res.status(400).send("Cannot update password from here");
    Admin.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update the Admin with id=${id}. Maybe Admin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Admin with id=${id}`
            });
        });
}

exports.changePassword = async function (req, res) {
    const id = req.params.id;
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    Admin.update(
        { password: await bcrypt.hash(req.body.password, salt) },
        {
            fields: ['password'],
            where: { id: id }
        }
    )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admins password was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot change the password to Admin with id=${id}. Maybe Admin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error changing password to Admin with id=${id}`
            });
        });
}