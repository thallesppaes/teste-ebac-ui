const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cu6qdy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br', // Colocação correta

  },
});
