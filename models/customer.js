module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "customers",
        timestamps: false
    }
    );

    return Customer;
};
