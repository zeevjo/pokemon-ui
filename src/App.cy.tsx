import App from './App'

describe('main page', () => {

  it('shuld conatin a pokemon list', () => {
    cy.mount(<App />)
    cy.get(".pokemonListContainer > li").should("have.length", 151)
  })

  


})