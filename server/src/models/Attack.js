let { db, DataTypes, Model } = require('../db/config.js');

// create your User model here
let Attack = db.define("Attack", {
  title: {
    type: DataTypes.STRING,
  },
  mojoCost: {
    type: DataTypes.INTEGER,
  },
  staminaCost: {
    type: DataTypes.INTEGER,
  },
});

module.exports = {Attack}
