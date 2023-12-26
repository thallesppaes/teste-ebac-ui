/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/enderecos.json')

describe('Funcionlidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Deve fazer cadastro e faturamento com sucesso', () => {
    enderecoPage.editarEnderecoFaturamento('Junior', 'Alves', 'Vivo', 'Brasil', 'Av Joao Paulo', '200', 'Cerquilho', 'São Paulo', '02002000', '14999999999', 'ebac-teste@dominio.com')
  });

  it('Deve fazer cadastro e faturamento com sucesso - Usando arquivo de dados', () => {
    enderecoPage.editarEnderecoFaturamento(
      dadosEndereco[1].nome,
      dadosEndereco[1].sobrenome,
      dadosEndereco[1].empresa,
      dadosEndereco[1].pais,
      dadosEndereco[1].endereco,
      dadosEndereco[1].numero,
      dadosEndereco[1].cidade,
      dadosEndereco[1].estado,
      dadosEndereco[1].cep,
      dadosEndereco[1].telefone,
      dadosEndereco[1].email)
  });
});