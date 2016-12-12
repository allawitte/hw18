var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');



exports.config = {

    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['test/*.js'],

    capabilities: {

        browserName: 'chrome'

    },



    suites: {

        sum: [

            'test/*add*.js',

            'test/*sum*.js'

        ],

        substract: [

            'test/*substract*.js'

        ]

    },



    onPrepare: function() {

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({

            savePath: './test/reports/',

            screenshotsFolder: 'images'

        }));

    }

}
/**
 * Created by HP on 12/11/2016.
 */
