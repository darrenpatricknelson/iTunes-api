import React, { useState } from 'react';

export default function FavButton(props) {
  const data = props.data;
  const { favorites } = props.values;
  const { setFavorites } = props.methods;
  const [state, setState] = useState(false);

  const handleClick = (data) => {
    // what this function does is check the favorites array
    // if the array.length is equal to 0, it will add the new media as a favorite
    if (favorites.length === 0) {
      setFavorites((prev) => [...prev, data]);
      setState(true);
      return;
    }

    // if the aray.length is not equal to 0,
    // it will check to see if the new media being add already exists inside of the array
    // if it does, it will then delete that media
    // My thinking is, the user cant/ doesnt want 2 sets of the same media in his/her favourite
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i] === data) {
        favorites.splice(i, 1);
        setState(false);
        return;
      }
    }

    // if both the above checks are passed
    // the new media will simply be added
    setFavorites((prev) => [...prev, data]);
    setState(true);
  };

  return (
    <button className="starButton" onClick={() => handleClick(data)}>
      {state ? (
        <i className="fa-solid fa-heart heartLogo heartLogoTrue"></i>
      ) : (
        <i className="fa-solid fa-heart heartLogo"></i>
      )}
    </button>
  );
}
