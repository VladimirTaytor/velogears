"use strict";
const bcrypt = require('bcrypt');

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
                allowNull: false,
                set(val) {
                    this.setDataValue('password', this.generateHash(val));
                }
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
        }, {
            instanceMethods: {
                generateHash: function (password) {
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
                },
                validatePassword: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
            }
        }
    );

    return User;
};