import React from 'react';
import renderer from 'react-test-renderer';

import Shopping from '../src/pages/shopping';
import Checkout from '../src/pages/checkout';

test('Shopping page', () => {
  const component = renderer.create(<Shopping />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Checkout page', () => {
  const component = renderer.create(<Checkout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Maybe test some functions here? If it comea to any relevant exported one.
