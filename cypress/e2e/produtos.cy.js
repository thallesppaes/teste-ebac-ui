/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

  beforeEach(() => {
    cy.visit('produtos')
  });

  it('Deve selecionar um produto da lista', () => {
    var quantidade = 3

    cy.get('[class="product-block grid"]').first().click()

    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
  });


});