module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: Sequelize.INTEGER
        },
        product_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.DOUBLE
        },
        time_date: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING
        },
        paid: {
            type: Sequelize.BOOLEAN
        }

    }, {
        tableName: "orders",
        timestamps: false
    }
    );

    return Order;
};
