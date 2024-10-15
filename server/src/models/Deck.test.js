const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const db = require('../db/config')

// define in global scope
let deck

// clear db and create new deck before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ 
    Deck: {
        name: 'Anna', 
        xp: 185
    }
   }, {Include: [Deck]})
})

describe('Deck', () => {
    it('has an id', async () => {
      expect(deck).toHaveProperty('id')
    })
    it('Deck name and xp set correctly', async () => {
      // expect (user.Deck).toEqual({name: 'player1', xp: 42})
      expect (deck.name).toEqual('Anna')
      expect (deck.xp).toEqual(185)               //lowercase d as using the instance of Deck, not the Deck itself
    })
  })

// clear db after tests
afterAll(async () => await db.sync({ force: true }))


