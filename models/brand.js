module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    }, {
        tableName: "brands",
        timestamps: false
    }
    );

    return Brand;
};
