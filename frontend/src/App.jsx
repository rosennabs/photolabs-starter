import React from 'react';
import { useState, useReducer} from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';




// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayMode, setDisplayMode] = useState(false);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayMode={setDisplayMode}/> 
      {displayMode && <PhotoDetailsModal setDisplayMode={setDisplayMode}/>} 
      
    </div>

    
  );
};

export default App;
