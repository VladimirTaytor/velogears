"use strict";

module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
            id: {
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            message: {
                type: DataTypes.STRING,
                allowNull: false
            },
            details: {
                type: DataTypes.TEXT
            }
        }, {
            classMethods: {
                associate: function (models) {
                    Order.belongsTo(models.Cart);
                }
            }
        }
    );

    return Order;
};