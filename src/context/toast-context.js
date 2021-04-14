import React, { createContext, useState } from 'react'


const ToastContext = createContext([[], () => []])

const ToastProvider = props => {
  const [state, setState] = useState([])
  return (
    <ToastContext.Provider value={[state, setState]}>
      {props.children}
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
