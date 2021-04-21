module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }

    }, {
        tableName: "customers",
        timestamps: false
    }
    );

    return Customer;
};
