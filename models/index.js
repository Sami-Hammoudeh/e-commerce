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
<<<<<<< Updated upstream
db.products = require("./product.js")(sequelize, Sequelize);
db.brands = require("./brand.js")(sequelize, Sequelize);
=======
db.categories = require("./category.js")(sequelize, Sequelize); 
db.subcategories = require("./subcategory.js")(sequelize, Sequelize); 
>>>>>>> Stashed changes
module.exports = db;