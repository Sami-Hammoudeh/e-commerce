require('dotenv').config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.js")(sequelize, Sequelize); //add this line
db.orders = require("./order.js")(sequelize, Sequelize); 
db.categories = require("./category.js")(sequelize, Sequelize); 
db.sub_Categories = require("./sub_Category.js")(sequelize, Sequelize); 
db.products = require("./product.js")(sequelize, Sequelize);
db.brands = require("./brand.js")(sequelize, Sequelize);
db.addresses = require("./address.js")(sequelize, Sequelize); //add this line
db.order_Details = require("./order_Detail.js")(sequelize, Sequelize); //add this line

module.exports = db;