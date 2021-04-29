module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'customers',
                key: 'user_id'
              }
        },
        product_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'products',
                key: 'id'
              }
        },
        address_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'addresses',
                key: 'id'
              }
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
