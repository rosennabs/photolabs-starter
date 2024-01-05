import React from 'react'
import '../styles/Filters.scss';

const SearchBar = ({ cityInput, setCityInput, handleFilterInput }) => {
  

  return (
    <div className='filter'>
      
      {/* Input fields for filtering */}
      <input
        type="text"
        name="city"
        placeholder="City"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <span onClick={() => handleFilterInput()}> 🔍 </span>
    </div>
  )


} 

export default SearchBar;