module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_email: {
            type: Sequelize.STRING,
            references: {
                model: 'customers',
                key: 'email'
              }
        },
        country: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        zip_code: {
            type: Sequelize.INTEGER
        },
        phone: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "addresses",
        timestamps: false
    }
    );

    return Address;
};
