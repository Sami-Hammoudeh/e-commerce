module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'email'
            }
        }
    }, {
        tableName: "admins",
        timestamps: false
    }
    );
    return Admin;
};
