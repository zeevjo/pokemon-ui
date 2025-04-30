import App from "./App";

describe("main page should display pokemon list", () => {

  const url = "http://localhost:8080/api/pokemon";

  const types = [{ name: "Grass" }, { name: "Poison" }];

  const pokemons = [
    {
      pokedexNumber: 1,
      name: "Bulbasaur",
      imgUrl: "http://www.serebii.net/pokemongo/pokemon/001.png",
      types: types,
    },
    {
      pokedexNumber: 2,
      name: "Ivysaur",
      imgUrl: "http://www.serebii.net/pokemongo/pokemon/002.png",
      types: types,
    },
  ];

  it("should display loader while waiting for server response", () => {
    cy.intercept("GET", url, {
      statusCode: 200,
      body: pokemons,
      delayMs: 1000,
    }).as("getPokemons");

    cy.mount(<App />);
    cy.get(".loadingContainer")
      .should("be.visible")
      .and("contain.text", "Loading...");

    cy.wait("@getPokemons");
  });

  it("should display pokemon list on successful api response", () => {
    cy.intercept("GET", url, {
      statusCode: 200,
      body: pokemons,
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".pokemonListContainer > .pokemonItemContainer").should(
      "have.length",
      2
    );

    pokemons.forEach(({ pokedexNumber, name }) => {
      cy.get(".pokemonItemContainer")
        .should("contain.text", `Pokemon Number: ${pokedexNumber}`)
        .and("contain.text", `Pokemon Name: ${name}`);
    });
  });

  it("should not display loader on successful api response", () => {
    cy.intercept("GET", url, {
      statusCode: 200,
      body: pokemons,
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".loadingContainer").should("not.exist");
  });

  it("should display error message on server error", () => {
    cy.intercept("GET", url, {
      statusCode: 500,
      body: pokemons,
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".errorMessageContainer").contains(
      "Something went wrong, Please try again later."
    );
  });
});
