import App from "./App";

describe("main page should display pokemon list", () => {
  
  const url = "http://localhost:8080/api/pokemon";

  it("should display loader while waiting for server response", () => {
    cy.intercept("GET", url, {
      fixture: "pokemonList.json",
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
      fixture: "pokemonList.json",
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".pokemonListContainer > li").should("have.length", 151);
  });

  it("should not display loader on successful api response", () => {
    cy.intercept("GET", url, {
      statusCode: 200,
      fixture: "pokemonList.json",
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".loadingContainer").should("not.exist");
  });

  it("should display error message on server error", () => {
    cy.intercept("GET", url, {
      statusCode: 500,
      fixture: "pokemonList.json",
    }).as("getPokemons");

    cy.mount(<App />);
    cy.wait("@getPokemons");
    cy.get(".errorMessageContainer").contains(
      "Something went wrong, Please try again later."
    );
  });
});
