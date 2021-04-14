import React from 'react'

import {
  ToggleContainer,
} from '../styles/index'
import {
  Soleil, Lune,
} from '../assets/index'


export const ToggleTheme = ({ selected, toggleTheme }) => {

  return (
    <>
      <ToggleContainer isTheme={selected} onClick={toggleTheme}>
        <div>
          <span>
            {selected ? <Soleil /> : <Lune />}
          </span>
        </div>
      </ToggleContainer>
    </>
  );
}
