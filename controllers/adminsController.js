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
    // Create an admin
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
            Admin.create(admin);
            res.send({
                email: admin.email,
                password: admin.password,
                first_name: admin.first_name,
                last_name: admin.last_name
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
    Admin.findByPk(req.params.id)
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

}

exports.deleteAllAdmins = function (req, res) {

}

exports.deleteAdmin = function (req, res) {

}

exports.updateAdmin = function (req, res) {

}