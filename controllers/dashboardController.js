const { Op } = require("sequelize");
const db = require("../models");
const bcrypt = require('bcrypt');
const Product = db.products;

exports.getStock = function (req, res) {
    
}