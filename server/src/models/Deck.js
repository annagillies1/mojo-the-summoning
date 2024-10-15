let { db, DataTypes, Model } = require('../db/config.js');



// create your Deck model here
let Deck = db.define("Deck", {
  name: {
    type: DataTypes.STRING,
  },
  xp: { 
    type: DataTypes.INTEGER, 
  }
});

module.exports = {Deck}