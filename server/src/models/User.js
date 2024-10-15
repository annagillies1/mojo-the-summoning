let { db, DataTypes, Model } = require('../db/config.js');

// create your User model here
let User = db.define("User", {
  username: {
    type: DataTypes.STRING,
  },
});

module.exports = {User}