import renderer from 'react-test-renderer';

import Shopping from '../src/pages/shopping';

test('checked', () => {
  const component = renderer.create(Shopping());
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
