module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        uesr_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, {
        tableName: "customers",
        timestamps: false
    }
    );

    return Customer;
};
