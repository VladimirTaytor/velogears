"use strict";

module.exports = function (sequelize, DataTypes) {
    var Cart = sequelize.define("Cart", {
            id: {
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            details: {
                type: DataTypes.TEXT
            }
        }, {
            classMethods: {
                associate: function (models) {
                    Cart.belongsToMany(models.Item, {through: 'CartItems'});
                    Cart.belongsTo(models.User);
                }
            }
        }
    );

    return Cart;
};