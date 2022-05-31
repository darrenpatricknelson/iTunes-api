import React from 'react';
import Favorite from './Favorite.js';
import Unfavorite from './Unfavorite.js';

// this component is the functionality for the favorite button
//
export default function FavButton(props) {
  // deconstruct props
  const data = props.data;
  const { favorites } = props.values;
  const { setFavorites } = props.methods;

  // a function to check if the favs array contains a specific media
  const isFav = (media, favorites) => favorites.includes(media);

  // the is when the user clicks on the heart
  // We will check if the item exists in the favs array
  const handleClick = (data) => {
    if (isFav(data, favorites)) {
      // if it exists, we remove
      const withRemoved = favorites.filter((favorite) => {
        return favorite !== data;
      });
      setFavorites(withRemoved);
    } else {
      // if it doesnt, we add
      setFavorites((prev) => [...prev, data]);
    }
  };

  // renders a button with a specific color
  // either red (favorited) or black (unfavorited)
  return (
    <button className="starButton" onClick={() => handleClick(data)}>
      {isFav(data, favorites) ? <Favorite /> : <Unfavorite />}
    </button>
  );
}
