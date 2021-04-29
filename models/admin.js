module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'id'
              }
        }
    }, {
        tableName: "admins",
        timestamps: false
    }
    );
    return Admin;
};
