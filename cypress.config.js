const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://webdriveruniversity.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
