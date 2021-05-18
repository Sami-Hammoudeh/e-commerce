module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'id'
              }
        }
    }, {
        tableName: "customers",
        timestamps: false
    }
    );

    return Customer;
};
