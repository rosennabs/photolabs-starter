import React from 'react'

import "../styles/ToggleMode.scss";

export default function ToggleMode({toggleMode, mode}) {

  return (
    <span className='toggle-button'
      onClick={() => toggleMode()} > ⚙ </span>
  )
}
