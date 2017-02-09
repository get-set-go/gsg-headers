import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Headers from '../src';

describe('<Headers /> component', function() {

  it('should blockquote exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Headers />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
