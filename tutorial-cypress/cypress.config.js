const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'va1s61',
  defaultCommandTimeout: 15000,
  eyesIsDisabled: false,
  eyesBrowser: '[{"width":1000,"height":660,"name":"chrome"}]',
  eyesFailCypressOnDiff: false,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 4,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    testConcurrency: 4,
    browser: [
      {
        width: 1000,
        height: 660,
        name: 'chrome',
      },
    ],
    failCypressOnDiff: false,
    dontCloseBatches: true,
    apiKey: 'K1e100MLFvPIM2WJx41v7wfLskDbkSKKwYb3z102hvb1VvU110',
    batch: {
      id: 'eb86cc54-fce0-4643-aef9-4cbce59a1b2c',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 64812,
  isComponent: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
