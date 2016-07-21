import React from 'react';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';

import Navbar from '../client/Navbar';

describe('Navbar test', () => {
    it('should contain nav', () => {
        const navbarComponent = TestUtils.renderIntoDocument(
            <Navbar/>
        );

        const navDiv = TestUtils.findRenderedDOMComponentWithTag(navbarComponent, 'nav');

        assert.ok(navDiv);
    })
});