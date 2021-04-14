import React from 'react'

import {
  ToggleStyle,
  HiddenCheckbox,
} from '../styles/index'


export const ToggleChecked = ({ selectedCheck, toggleSelected, ...props }) => {

  return (
    <>
      <ToggleStyle onChange={toggleSelected} checked={!selectedCheck}>
        <HiddenCheckbox checked={selectedCheck} {...props} />
        <div className="toggle-background">
          {!selectedCheck
            ? <label>x</label>
            : <label>&radic;</label>
          }
          <span></span>
        </div>
      </ToggleStyle>
    </>
  );
}
