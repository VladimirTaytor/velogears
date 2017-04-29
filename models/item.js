"use strict";

module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
            id: {
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            description: {
                type: DataTypes.TEXT
            },
            price: DataTypes.FLOAT,
            mainImage: {
                unique: true,
                type: DataTypes.STRING
            }
        }, {
            classMethods: {
                associate: function (models) {
                    Item.belongsTo(models.SubCategory);
                }
            }
        }
    );

    return Item;
};