"use strict";

module.exports = function (sequelize, DataTypes) {
    var Image = sequelize.define("Image", {
            id: {
                primaryKey: true,
                unique: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            src: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            }
        }, {
            classMethods: {
                associate: function (models) {
                    Image.belongsTo(models.Item, {
                        onDelete: "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            },
            timestamps: false
        }
    );

    return Image;
};