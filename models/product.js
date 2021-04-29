module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sub_id: {
            type: Sequelize.INTEGER
        },
        brand_id: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        description: {
            type: Sequelize.STRING
        },
        stock: {
            type: Sequelize.INTEGER
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        color: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "products",
        timestamps: false
    }
    );

    return Product;
};
