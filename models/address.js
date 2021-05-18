module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define("address", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'customers',
                key: 'id'
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
