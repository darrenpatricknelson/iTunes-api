import React from 'react';
import Favorite from '../components/Favorite.js';
import Unfavorite from '../components/Unfavorite.js';
import renderer from 'react-test-renderer';

// Testing the icon to be red if favorite
// using snapshot
// testing favorite (red)
test('renders correctly', () => {
  const tree = renderer.create(<Favorite />).toJSON();
  expect(tree).toMatchSnapshot();
});

// testing unfavorite (black)
test('renders correctly', () => {
  const tree = renderer.create(<Unfavorite />).toJSON();
  expect(tree).toMatchSnapshot();
});
