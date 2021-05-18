module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
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
        tableName: "admins",
        timestamps: false
    }
    );
    return Admin;
};
