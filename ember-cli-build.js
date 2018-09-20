'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    // 判断是否需要sourceMaps
    let sourceMap = process.env.EMBER_ENV === 'production' ? 'false' : 'inline';
    console.info(sourceMap);
    let app = new EmberApp(defaults, {
        // Add options here
        // storeConfigInMeta: false,

        // SRI: {
        //   enabled: true
        // },

        // fingerprint: {
        // 	enabled: false
        // },

        // minifyCSS: {
        //   enabled: false
        // },
        // minifyJS: {
        //   enabled: false
        // },
        // cssModules: {
        // 	plugins: [
        // 		require('postcss-import'),
        // 		require('postcss-extend'),
        // 		require('postcss-cssnext'),
        // 		require('rucksack-css')({
        // 			alias: false,
        // 			hexRGBA: false,
        // 			fallbacks: true
        // 		})
        // 	]
        // },
        'ember-bootstrap': {
            'bootstrapVersion': 3,
            'importBootstrapFont': true,
            'importBootstrapCSS': true
        },
        sassOptions: {
            includePaths: [
                'node_modules/bootstrap-sass/assets/stylesheets'
            ]
        },
        babel: {
            sourceMaps: sourceMap
        }
    });
    //第三方静态文件导入
    app.import("vendor/echarts/echarts.js")
    return app.toTree();
};