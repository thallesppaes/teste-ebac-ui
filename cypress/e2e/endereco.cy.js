/// <reference types="cypress" />

describe('Funcionlidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Deve fazer cadastro e faturamento com sucesso', () => {

  });
});