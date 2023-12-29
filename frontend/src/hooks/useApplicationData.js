import { useState } from "react"


const useApplicationData = () => {
  const [state, setState] = useState({
    displayMode: false,
    favourites: []
  });

  const setDisplayMode = (display) => {
    //Update display mode when called
    setState((prev) => {
      return {
        ...prev,
        displayMode: display
      }

    })
  }
  
  const addToFavourites = (photoId) => {
    //update the list of favourites with new likes
    setState((prev) => {
      return {
        //returns an object since initial state is an object.
        ...prev, //makes a copy of the current state
        favourites: [...prev.favourites, photoId], //uses the spread operator to add new element to the current favourites array
      };
    });
  };

  const removePhotoFromFavourites = (photoId) => {
    //remove and update the list of favourites
    setState((prev) => {
      return {
        ...prev,
        favourites: prev.favourites.filter((id) => id !== photoId),
      };
    });
  };

  const toggleFavourite = (photoId) => {
    state.favourites.includes(photoId)
      ? removePhotoFromFavourites(photoId)
      : addToFavourites(photoId);
  };

  return {
    state,
    toggleFavourite,
    setDisplayMode
  }


}

export default useApplicationData;
