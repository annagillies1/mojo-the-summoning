const { DataTypes } = require("sequelize");
const Sequelize = require("../db/config");

// create your User model here
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;