const Category = sequelize.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    describtion: {
        type: Sequelize.STRING
    },
  
}, {
    tableName: "categories",
    timestamps: false
}
);

return Category;
