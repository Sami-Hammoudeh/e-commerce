const { sequelize } = require(".");

const SubCategory = sequelize.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    catID:{
type:sequelize.INTEGER
    },

    name: {
        type: Sequelize.STRING
    },
    describtion: {
        type: Sequelize.STRING
    },
  
}, {
    tableName: "subcategories",
    timestamps: false
}
);

return SubCategory;
