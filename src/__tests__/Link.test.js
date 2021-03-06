import React from 'react';
import Link from '../components/Link';
import renderer from 'react-test-renderer';

test('Link should changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="https://strapi.io">Strapi</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});