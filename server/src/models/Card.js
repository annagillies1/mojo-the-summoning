const { DataTypes } = require("sequelize");
const Sequelize = require("../db/config");

// create your User model here
const Card = sequelize.define("Card", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojo: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  stamina: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  imgUrl: {
    type: DataTypes.STRING, 
    allowNull: false
  }
});

module.exports = Card;