"use strict";

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
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
                    Category.hasMany(models.SubCategory)
                },
                timestamps: false
            }
        });

    return Category;
};