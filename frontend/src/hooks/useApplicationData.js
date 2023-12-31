import { useState, useReducer, useEffect } from "react"
import axios from "axios"


const useApplicationData = () => {
  //This is our global initial state that gets updated via the reduce function calls below

  const initialState = {
    displayMode: false,
    favourites: [],
    photoData: [],
    topicData: [],
  };

  const [allPhotos, setAllPhotos] = useState([]); // New state to store all photos seperately for home refresh

  //Make an API request to the photo data and run request only once after component renders
  useEffect(() => {
    axios.get("/api/photos").then((res) => {
      setPhotoData(res.data);
      setAllPhotos(res.data);
    });
  }, []);

  //Make an API request to the topic data and run request only once after component renders
  useEffect(() => {
    axios.get("/api/topics").then((res) => {
      setTopicData(res.data);
    });
  }, []);

  //Make an API request to fetch different image categories with topic id

  const setCategory = (topicId) => {
    axios.get(`/api/topics/photos/${topicId}`).then((res) => {
      setPhotoData(res.data);
    });
  };

  const refreshHomepage = () => {
    setPhotoData(allPhotos);
  };

  //Update state under the following conditions
  const reduce = (state, action) => {
    switch (action.type) {
    case "setPhotoData":
      return {
        ...state,
        photoData: action.photoData,
      };
    
    case "setTopicData":
      return {
        ...state,
        topicData: action.topicData,
      };
   
    case "setDisplayMode":
      return {
        ...state,
        displayMode: action.displayData,
      };
   
      case "addToFavourites":
      return {
        ...state,
        favourites: [...state.favourites, action.photoId],
      };
    
      case "removePhotoFromFavourites":
      return {
        ...state,
        favourites: [...state.favourites.filter((id) => id !== action.photoId)],
      };
    
    }
  };

  //Declare the useReducer hook
  const [state, dispatch] = useReducer(reduce, initialState);

  //Dispatch the photo and topic data to be actioned by the applicable reducer function call above

  const setPhotoData = (data) => {
    dispatch({
      type: "setPhotoData",
      photoData: data,
    });
  };

  const setTopicData = (data) => {
    dispatch({
      type: "setTopicData",
      topicData: data,
    });
  };

  const setDisplayMode = (display) => {
    //The dispatch function calls the applicable reduce function
    //Update display mode when called

    dispatch({
      type: "setDisplayMode",
      displayData: display,
    });
  };

  const addToFavourites = (photoId) => {
    //update the list of favourites with new likes
    dispatch({
      type: "addToFavourites",
      photoId: photoId,
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
    setDisplayMode,
    setCategory,
    refreshHomepage
  };
}

export default useApplicationData;
