/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré cadastro', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });

  it('Deve completar o pré cadastro com sucesso', () => {
    let fakerNome = faker.name.firstName()
    let fakerSobrenome = faker.name.lastName()
    let fakerEmail = faker.internet.email(fakerNome)

    cy.get('#reg_email').type(fakerEmail)
    cy.get('#reg_password').type('!teste@teste$')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(fakerNome)
    cy.get('#account_last_name').type(fakerSobrenome)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso.")
  });
});