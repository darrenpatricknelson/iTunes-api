import React from 'react';
import Favorite from '../components/Favorite.js';
import renderer from 'react-test-renderer';

// Testing the icon to be red if favorite
// using snapshot

test('renders correctly', () => {
  const tree = renderer.create(<Favorite />).toJSON();
  expect(tree).toMatchSnapshot();
});
