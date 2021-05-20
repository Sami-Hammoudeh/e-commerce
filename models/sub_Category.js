module.exports = (sequelize, Sequelize) => {
    const Sub_Category = sequelize.define("sub_category", {
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
        },
        cat_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        },
    }, {
        tableName: "sub_categories",
        timestamps: false
    }
    );

    return Sub_Category;
};
