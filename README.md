<h1 align="center">Teste de UI com Cypress e Faker</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-14.0.0-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Cypress-8.0.0-brightgreen" alt="Cypress">
</p>

<p align="center">
  Este projeto realiza testes de UI automatizados usando Cypress e Faker para gerar dados fictícios. Esses testes são destinados a garantir a qualidade e a integridade da interface do usuário.
</p>

## Pré-requisitos

Antes de executar os testes, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Configuração do Ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/thallesppaes/teste-ebac-ui.git
   cd seu-projeto

1. Instale as dependências:

npm install

## Executando os Testes
Para executar os testes, utilize o seguinte comando:

npm cy:run

Isso iniciará o Cypress e executará todos os testes definidos no diretório cypress/integration.

### Estrutura do Projeto
cypress/integration: Contém os scripts de teste escritos em Cypress.</br>
cypress/support: Contém arquivos de suporte, como comandos personalizados e configurações adicionais.</br>
cypress/fixtures: Armazena dados fictícios gerados pelo Faker para uso nos testes.</br>

### Personalização dos Dados Fictícios
Os dados fictícios são gerados usando a biblioteca Faker. Para personalizar os dados, ajuste os scripts em cypress/support/commands.js conforme necessário.

### Contribuição
Sinta-se à vontade para contribuir para este projeto abrindo problemas ou enviando solicitações de pull.

### Autor
Thalles

<p align="center">⭐️ Se este projeto foi útil para você, por favor, considere dar uma estrela ⭐️</p>

