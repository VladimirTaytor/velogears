"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true
            },
            firstName: {
                type: DataTypes.STRING
            },
            lastName: {
                type: DataTypes.STRING
            }
        }
    );

    return User;
};