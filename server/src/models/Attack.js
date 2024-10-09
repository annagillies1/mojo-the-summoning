const { DataTypes } = require("sequelize");
const Sequelize = require("../db/config");

// create your User model here
const Attack = sequelize.define("Attack", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mojoCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  staminaCost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Attack;
