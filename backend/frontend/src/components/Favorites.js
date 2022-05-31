import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../assests/App.css';

export default function Favorites(props) {
  const { favorites } = props.values;
  const { setFavorites } = props.methods;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const isFav = (media, favorites) => favorites.includes(media);

  const removeFav = (val) => {
    if (isFav(val, favorites)) {
      const withRemoved = favorites.filter((favorite) => {
        return favorite !== val;
      });
      setFavorites(withRemoved);
    }
  };

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
