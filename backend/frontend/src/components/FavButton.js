import React, { useState } from 'react';

export default function FavButton(props) {
  const data = props.data;
  const addFavourite = props.methods;
  const [state, setState] = useState(false);

  const handleClick = (val) => {
    setState((prev) => !prev);

    addFavourite(val);
  };

  return (
    <button className="starButton" onClick={() => handleClick(data)}>
      {state ? (
        <i className="fa-solid fa-star starLogo starLogoTrue"></i>
      ) : (
        <i className="fa-solid fa-star starLogo"></i>
      )}
    </button>
  );
}
