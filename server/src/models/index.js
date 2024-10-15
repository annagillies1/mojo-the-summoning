const { User } = require('./User')
const { Deck } = require('./Deck')
const { Card } = require('./Card')
const { Attack } = require('./Attack')


// import the rest of your models above

// set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, { through: "cardAttacks" })
Attack.belongsToMany(Card, { through: "cardAttack" })

// Sync the models with the database
//const { db } = require("../db/config"); // Make sure to import `db` and sync it
//db.sync() // This ensures all models and associations are synced with the DB
//  .then(() => {
 //   console.log("Database synced!");
 // })
 // .catch((error) => {
 //   console.error("Error syncing the database:", error);
 // });

// and then export them all below
module.exports = { User, Deck, Card, Attack };
