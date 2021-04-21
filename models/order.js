module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        address_id: {
            type: Sequelize.INTEGER
        }

    }, {
        tableName: "orders",
        timestamps: false
    }
    );

    return Order;
};
