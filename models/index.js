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

//Entites
db.customers = require("./customer.js")(sequelize, Sequelize);
db.orders = require("./order.js")(sequelize, Sequelize);
db.categories = require("./category.js")(sequelize, Sequelize);
db.sub_categories = require("./sub_category.js")(sequelize, Sequelize);
db.products = require("./product.js")(sequelize, Sequelize);
db.brands = require("./brand.js")(sequelize, Sequelize);
db.addresses = require("./address.js")(sequelize, Sequelize);
db.admins = require("./admin.js")(sequelize, Sequelize);
db.users = require("./user.js")(sequelize, Sequelize);

//Relations
//Admin Relations
db.admins.belongsTo(db.users, { foreignKey: 'id' });
db.users.hasMany(db.admins, { foreignKey: 'id' });

//Customer Relations
db.customers.belongsTo(db.users, { foreignKey: 'id' });
db.users.hasMany(db.customers, { foreignKey: 'id' });
//---With Orders
db.customers.belongsToMany(db.orders, { through: 'customers_orders', foreignKey: 'customer_id', timestamps: false });
db.orders.belongsToMany(db.customers, { through: 'customers_orders', foreignKey: 'order_id', timestamps: false });

//Addresses Relations
db.addresses.belongsTo(db.customers, { foreignKey: 'customer_id' });
db.customers.hasMany(db.addresses, { foreignKey: 'customer_id' });

//Orders Relations
db.orders.belongsTo(db.addresses, { foreignKey: 'address_id' });
db.addresses.hasMany(db.orders, { foreignKey: 'address_id' });
//
db.orders.belongsTo(db.customers, { foreignKey: 'cart_id' });
db.customers.hasMany(db.orders, { foreignKey: 'cart_id' });
//
db.orders.belongsTo(db.products, { foreignKey: 'product_id' });
db.products.hasMany(db.orders, { foreignKey: 'product_id' });

//Products Relations
db.products.belongsTo(db.brands, { foreignKey: 'brand_id' });
db.brands.hasMany(db.products, { foreignKey: 'brand_id' });
//---With Sub_Categories
db.products.belongsToMany(db.sub_categories, { through: 'products_sub_categories', foreignKey: 'product_id', timestamps: false });
db.sub_categories.belongsToMany(db.products, { through: 'products_sub_categories', foreignKey: 'sub_id', timestamps: false });

//Addresses Relations
db.sub_categories.belongsTo(db.categories, { foreignKey: 'cat_id' });
db.categories.hasMany(db.sub_categories, { foreignKey: 'cat_id' });

module.exports = db;