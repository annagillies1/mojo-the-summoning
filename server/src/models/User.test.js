const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User')
let { db, DataTypes, Model } = require("../db/config.js");

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ 
    username: 'gandalf', 
    Deck: {
      name: 'player1', 
      xp: 42
    } 
  }, {include: [Deck]});        //tells the test to use the model deck
})

afterAll(async () => await db.close())


describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

})

// clear db after tests
//afterAll(async () => await db.sync({ force: true }))