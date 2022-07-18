const { defineConfig } = require("cypress");


module.exports = defineConfig({

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            // require('cypress-mochawesome-reporter/plugin')(on);

        },
        "env": {
            "url": "https://demo.insightmonk.com/discover"
        },
        "watchForFileChanges": true,
        "reporter": "mochawesome",
        "reporterOptions": {
            "charts": true,
            "overwrite": false,
            "html": false,
            "json": true,
            "reportDir": "cypress/reports"
        },


    },

});