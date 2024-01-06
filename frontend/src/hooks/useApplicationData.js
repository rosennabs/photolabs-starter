import {useState, useEffect, useReducer} from "react";
import axios from "axios";

//State management
const useApplicationData = () => {
  const initialState = {
    photoData: [],
    topicData: [],
    favourites: [],
    photoDetailsModal: false,
    cityInput: "",
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

   const handleFilterInput = () => {
     //Filter photos based on the user's input (city)
     const filteredPhotos = allPhotos.filter(
       (photo) =>
         photo.location.city.toLowerCase() === state.cityInput.toLowerCase()
     );

     setPhotoData(filteredPhotos);
     setCityInput("");
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

      case "setCityInput":
        return {
          ...state,
          cityInput: action.city,
        };

      
      case "displayFavourites":
        //filter photodata based on the photo ids contained in favourites
        const favouritePhotos = state.photoData.filter((photo) =>
          state.favourites.includes(photo.id)
        );
        //update photodata with favourite photos
        return {
          ...state,
          photoData: favouritePhotos,
        };
    }
  };

  const [state, dispatch] = useReducer(reduce, initialState);

  //Dispatch data fetched from the axios call to the reduce function to update state with data

  const setPhotoData = (data) => {
    dispatch({
      type: "setPhotoData",
      photoData: data
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
      photoId: photoId
    });
  };
  
   const removeFavourites = (photoId) => {
     dispatch({
       type: "removeFavourites",
       photoId: photoId,
     });
   };
  
   const toggleFavourites = (photoId) => {
      state.favourites.includes(photoId) ? removeFavourites(photoId) : addToFavourites(photoId)  
   };

  const setCityInput = (city) => {
    dispatch({
      type: "setCityInput",
      city: city,
    });
  };

  const displayFavourites = () => {
    dispatch({
      type: "displayFavourites",
    });
  }


  

  return {
    state,
    topicCategoryClicked,
    refreshHomepage,
    openModal,
    toggleFavourites,
    setCityInput,
    handleFilterInput,
    displayFavourites
  };
}


export default useApplicationData;
