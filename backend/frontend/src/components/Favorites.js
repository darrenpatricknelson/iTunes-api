import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../assests/App.css';

// This component is the tab on the right side of the screen
// It will display all the media that has been favorited by the user
export default function Favorites(props) {
  // deconstruct props
  const { favorites } = props.values;
  const { setFavorites } = props.methods;
  const [open, setOpen] = useState(false);

  // a fucntion to open/close the tab
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  // check is a specific media exists in the fav array
  const isFav = (media, favorites) => favorites.includes(media);

  // Since this is the favorites tab, all media here is already favorited
  // this function simply removes the favorited media
  const removeFav = (val) => {
    if (isFav(val, favorites)) {
      const withRemoved = favorites.filter((favorite) => {
        return favorite !== val;
      });
      setFavorites(withRemoved);
    }
  };

  // renders accordingly
  return (
    <div
      className={`favorites ${
        open ? 'favoritesContaineropen' : 'favoritesContainerClosed'
      }`}
    >
      <Button variant="danger" onClick={handleClick}>
        Favorites ({favorites.length})
      </Button>
      {favorites.map((val, idx) => {
        return (
          <div key={idx} className={open ? 'visualContent' : 'hiddenContent'}>
            <div className="favContainer">
              <h3>{val.artistName}</h3>
              <button
                title="Remove favorite"
                className="starButton"
                onClick={() => removeFav(val)}
              >
                <i className="fa-solid fa-heart heartLogo heartLogoTrue"></i>
              </button>
            </div>
            <p>{val.trackCensoredName}</p>
            <a href={val.artistViewUrl}>View artist</a>
          </div>
        );
      })}
    </div>
  );
}
