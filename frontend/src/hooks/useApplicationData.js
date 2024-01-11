import { useState, useEffect, useReducer } from "react";
import axios from "axios";


// Define action types as constants
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_TOPIC_DATA = "SET_TOPIC_DATA";
const SET_PHOTO_DETAILS_MODAL = "SET_PHOTO_DETAILS_MODAL";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

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
      case SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.photoData,
        };

      case SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.topicData,
        };

      case SET_PHOTO_DETAILS_MODAL:
        return {
          ...state,
          photoDetailsModal: action.photoDetailsModal,
        };

      case ADD_TO_FAVOURITES:
        return {
          ...state,
          favourites: [...state.favourites, action.photoId],
        };

      case REMOVE_FROM_FAVOURITES:
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
      type: SET_PHOTO_DATA,
      photoData: data,
    });
  };

  const setTopicData = (data) => {
    dispatch({
      type: SET_TOPIC_DATA,
      topicData: data,
    });
  };

  const openModal = (photoId) => {
    dispatch({
      type: SET_PHOTO_DETAILS_MODAL,
      photoDetailsModal: photoId,
    });
  };

  //Implement user favourites feature
  const addToFavourites = (photoId) => {
    dispatch({
      type: ADD_TO_FAVOURITES,
      photoId: photoId,
    });
  };

  const removeFavourites = (photoId) => {
    dispatch({
      type: REMOVE_FROM_FAVOURITES,
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
