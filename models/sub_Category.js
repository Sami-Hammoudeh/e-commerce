module.exports = (sequelize, Sequelize) => {
    const Sub_Category = sequelize.define("sub_Category", {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cat_id:{
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
  
}, {
    tableName: "sub_Categories",
    timestamps: false
}
);

return Sub_Category;
};
