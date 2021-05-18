module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'email'
              }
        }
    }, {
        tableName: "customers",
        timestamps: false
    }
    );

    return Customer;
};
