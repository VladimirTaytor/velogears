"use strict";

module.exports = function (sequelize, DataTypes) {
    var SubCategory = sequelize.define("SubCategory", {
            id: {
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        }, {
            timestamps: false,
            classMethods: {
                associate: function (models) {
                    SubCategory.belongsTo(models.Category);
                }
            }
    });

    return SubCategory;
};