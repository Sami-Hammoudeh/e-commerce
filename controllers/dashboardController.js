const { Op } = require("sequelize");
const db = require("../models");
const bcrypt = require('bcrypt');
const product = require("../models/product");
const Product = db.products;
const Order = db.orders;
const Category = db.categories;
const Brand = db.brands;
const SubCategory = db.sub_categories;

exports.getStock = function (req, res) {
    Product.findAll({ attributes: ["id", "name", "stock"] })
        .then(function (data) {
            res.send({
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
}

exports.getIncome = function (req, res) {
    Order.findAll({ attributes: [[db.sequelize.fn('sum', db.sequelize.col('amount')), 'income']] })
        .then(data => {
            res.send({
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
}

exports.getBrands = function (req, res) {
    Brand.findAll(
        {
            attributes: ["id", "name"],
            include: [{
                model: Product,
                as: 'products',
                where: { brand_id: 4 }
            }]
        }
    )
        .then(function (data) {
            res.send({
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
}