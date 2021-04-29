module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("admin", {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    }, {
        tableName: "admins",
        timestamps: false
    }
    );

    return Customer;
};
