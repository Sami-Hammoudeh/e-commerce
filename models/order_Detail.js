module.exports = (sequelize, Sequelize) => {
    const Order_Detail = sequelize.define("order_Detail", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: Sequelize.INTEGER
        },
        product_id: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.INTEGER
        }

    }, {
        tableName: "order_Details",
        timestamps: false
    }
    );

    return Order_Detail;
};
