const bcrypt = require('bcrypt');
const db = require("../models");
const User = db.users;
const Customer = db.customers;
const jwt = require('jsonwebtoken'); 

const signUp = async function (req, res) {
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
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role: "customer"
    };
    // Create a customer
    const customer = {
        email: req.body.email
    };
    // Save the user in the database
    User.create(user)
        .then(data => {
            Customer.create(customer);
            res.send({
                email: data.email,
                password: data.password,
                first_name: data.first_name,
                last_name: data.last_name
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });

}

const signIn = async function (req, res) {
    const user = await User.findOne({ where:{email: req.body.email} });
    if (!user) return res.status(400).json({ error: 'user not found' });
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password
   );
    if (!validPassword) return res.status(400).json({ error: 'Invalid Password'
   });
    // create token
    const token = jwt.sign({
    name: user.email
    }, process.env.JWT_SECRET)
    res.json({
    data: 'singin success',
    user: user,
    token: token
    }); 
   }

module.exports = {
    signUp: signUp,
    signIn: signIn,

};