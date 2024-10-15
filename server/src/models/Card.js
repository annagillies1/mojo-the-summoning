let { db, DataTypes, Model } = require('../db/config.js');



// create your User model here
let Card = db.define("Card", {
  name: {
    type: DataTypes.STRING,
  },
  mojo: {
    type: DataTypes.INTEGER,
  },
  stamina: {
    type: DataTypes.INTEGER,
  },
  imgUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = {Card}
