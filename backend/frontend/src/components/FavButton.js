import React from 'react';
import Favorite from './Favorite.js';
import Unfavorite from './Unfavorite.js';

export default function FavButton(props) {
  const data = props.data;
  const { favorites } = props.values;

  const { setFavorites } = props.methods;

  const isFav = (media, favorites) => favorites.includes(media);

  const handleClick = (data) => {
    if (isFav(data, favorites)) {
      const withRemoved = favorites.filter((favorite) => {
        return favorite !== data;
      });
      setFavorites(withRemoved);
    } else {
      setFavorites((prev) => [...prev, data]);
    }
  };

  return (
    <button className="starButton" onClick={() => handleClick(data)}>
      {isFav(data, favorites) ? <Favorite /> : <Unfavorite />}
    </button>
  );
}
