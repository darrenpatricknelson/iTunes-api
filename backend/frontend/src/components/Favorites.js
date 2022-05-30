import React, { useState } from 'react';
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
      <button onClick={handleClick}>hello</button>
    </div>
  );
}

/* 
! TODO
Build out the favorites side tab
add animation the opening and closing of the tab
add a button to delete a media from the favorites

*/
