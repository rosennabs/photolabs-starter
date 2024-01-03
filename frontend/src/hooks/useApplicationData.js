import { useState, useEffect, useReducer } from "react";
import axios from "axios";

//State management
const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
    favourites: [],
    photoDetailsModal: false,
  };

  const [allPhotos, setAllPhotos] = useState([]); // New state to store all photos seperately for home refresh

  //Fetch data from api
  useEffect(() => {
    axios.get("http://localhost:8001/api/photos").then((res) => {
      setPhotoData(res.data);
      setAllPhotos(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8001/api/topics").then((res) => {
      setTopicData(res.data);
    });
  }, []);

  const topicCategoryClicked = (id) => {
    axios.get(`http://localhost:8001/api/topics/photos/${id}`).then((res) => {
      setPhotoData(res.data);
    });
  };

  const refreshHomepage = () => {
    setPhotoData(allPhotos);
  };

  const reduce = (state, action) => {
    //Update state with photo data
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

      case "setPhotoDetailsModal":
        return {
          ...state,
          photoDetailsModal: action.photoDetailsModal,
        };

      case "addToFavourites":
        return {
          ...state,
          favourites: [...state.favourites, action.photoId],
        };

      case "removeFavourites":
        return {
          ...state,
          favourites: [
            ...state.favourites.filter((id) => id !== action.photoId),
          ],
        };
    }
  };

  const [state, dispatch] = useReducer(reduce, initialState);

  //Dispatch data fetched from the axios call to the reduce function to update state with data

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

  const openModal = (photoId) => {
    dispatch({
      type: "setPhotoDetailsModal",
      photoDetailsModal: photoId,
    });
  };

  //Implement user favourites feature
  const addToFavourites = (photoId) => {
    dispatch({
      type: "addToFavourites",
      photoId: photoId,
    });
  };

  const removeFavourites = (photoId) => {
    dispatch({
      type: "removeFavourites",
      photoId: photoId,
    });
  };

  const toggleFavourites = (photoId) => {
    state.favourites.includes(photoId)
      ? removeFavourites(photoId)
      : addToFavourites(photoId);
  };

  return {
    state,
    topicCategoryClicked,
    refreshHomepage,
    openModal,
    toggleFavourites,
  };
};

export default useApplicationData;
