import React from 'react';
import { useState, useReducer} from 'react';


import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

import './App.scss';




// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <TopNavigationBar /> 
      
      <PhotoList />
      
    </div>

    
  );
};

export default App;
