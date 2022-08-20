const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shirts: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    shorts: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    music: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hats: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    shoes: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
