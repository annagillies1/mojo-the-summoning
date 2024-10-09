const { DataTypes } = require("sequelize");
const Sequelize = require("../db/config");

// create your Deck model here
const Deck = sequelize.define("Deck", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xp: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
  }
});

module.exports = Deck;