import {jsdom} from 'jsdom';

// Setup virtual DOM with jsdom for tests

global.document = jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};