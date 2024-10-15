const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const db = require('../db/config')

// define in global scope
let cards

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
  cards = await Card.create({ 
    name: 'Warrior' , 
    mojo: 24,
    stamina: 9,
    imgUrl: 'www.example.com', 
  Attack: {
    title: 'AttacksTitle', 
    mojoCost: 5,
    staminaCost: 2
  }
  }, {include: [Card, Attack]})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(cards).toHaveProperty('id')
  })
})



describe ('Card', () => {
    it('Values set correctly', async() => {
        expect (cards.name).toEqual('Warrior')
        expect (cards.mojo).toEqual('12')
        expect (cards.stamina).toEqual('12')
        expect (cards.imgUrl).toEqual('www.google.com')
    })
    it('A Card can be loaded with its Attack', async () => {
      expect (cards.Attack.title).toEqual('AttacksTitle')
      expect (cards.Attack.mojoCost).toEqual(5)
      expect (cards.Attack.staminaCost).toEqual(2)
    })
})
