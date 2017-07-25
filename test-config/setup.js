require('babel-register')();

var jsdom = require('jsdom').JSDOM;

var exposedProperties = ['window', 'navigator', 'document'];

console.log(typeof jsdom);
global.document = (new jsdom('')).window.document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
