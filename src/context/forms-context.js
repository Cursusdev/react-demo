import React, { createContext, useState } from 'react';


const FormsContext = createContext([{}, () => {}]);

const FormsProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <FormsContext.Provider value={[state, setState]}>
      {props.children}
    </FormsContext.Provider>
  );
}

export { FormsContext, FormsProvider };
