// process.env.NODE_DEBUG = "request";
const constants = require('./constants')
const datetime = new Date();
exports.config = {
    // debug: true,
    // execArgv: ['--inspect=127.0.0.1:5859'],

    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    // region: 'us'


    specs: [
        './tests/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 20,
    capabilities: [
        {
            platformName:"Windows 10",
            browserName: 'googlechrome',
            browserVersion: 'latest-1',
            "sauce:options": {
                extendedDebugging: true,
                capturePerformance: true,
                build: `Soft transition performance test - ${datetime}`,
                name: constants.TEST_NAME
            }
        }
    ],
    logLevel: 'debug',
    // logLevels: {
        // webdriver: 'info',
        // 'wdio-applitools-service': 'info'
    // },
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    services: ['sauce'],
    framework: 'mocha',
    reporters: [
        'spec'

    ],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 400000,
        compilers: ['ts:ts-node/register'],
    },

    before: function (capabilities, specs) {
        require('ts-node').register({ files: true })
    },
}
