/* global cy */  // Le indica al linter que hay una variable global que vas a usar en este archivo o mejor instalar pluggin de cypress.

describe('Pokedex', function() {
  it('frontpage can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })
})