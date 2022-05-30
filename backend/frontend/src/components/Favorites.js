import React, { useEffect, useState } from 'react';
import '../assests/App.css';

export default function Favorites(props) {
  const { favorites } = props.values;
  const { setFavorites } = props.methods;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={open ? 'favoritesContaineropen' : 'favoritesContainerClosed'}
    >
      <button onClick={handleClick}>Favorites</button>
      {favorites.map((val, idx) => {
        return (
          <div key={idx} className={open ? 'visualContent' : 'hiddenContent'}>
            <h3>{val.artistName}</h3>
            <p>{val.trackCensoredName}</p>
            <a href={val.artistViewUrl}>View artist</a>
          </div>
        );
      })}
    </div>
  );
}

/* 
! TODO
Build out the favorites side tab
add animation the opening and closing of the tab
add a button to delete a media from the favorites

*/
