import { useReducer } from "react"


const useApplicationData = () => {

  const initialState = {
    displayMode: false,
    favourites: [],
  };

  const reduce = (state, action) => {
    if (action.type === "setDisplayMode") {
      return {
        ...state,
        displayMode: action.displayData
      }
    }

    if (action.type === "addToFavourites") {
      return {
        ...state,
        favourites: [...state.favourites, action.photoId],
      };
    }

     if (action.type === "removePhotoFromFavourites") {
       return {
         ...state,
         favourites: [...state.favourites.filter((id)=> id !== action.photoId)],
       };
     }

  };

  const [state, dispatch] = useReducer(reduce, initialState);

  const setDisplayMode = (display) => {
    //The dispatch function calls the applicable reduce function
    //Update display mode when called

    dispatch({
      type: "setDisplayMode",
      displayData: display,
    });
  }

  const addToFavourites = (photoId) => {
    //update the list of favourites with new likes
    dispatch({
      type: "addToFavourites",
      photoId: photoId
    });
  };

  const removePhotoFromFavourites = (photoId) => {
    //remove and update the list of favourites
    dispatch({
      type: "removePhotoFromFavourites",
      photoId: photoId,
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
