import React from 'react'

import {
  ToastMain,
} from '../styles/index'
import {
  Check,
  Info,
  Warning,
  Error,
} from '../assets/index'


export const Toast = props => {
  const { toastList, deleteToast } = props;
  const position = "top-left"

  const IconView = props => {
    let view = null
    
    switch(props.icon) {
      case 'check':
        view = <Check />
        break;
      case 'info':
        view = <Info />
        break;
      case 'warning':
        view = <Warning />
        break;
      case 'error':
        view = <Error />
        break;
      default:
        view = ''
    }
    return view
  }

  return (
    <ToastMain>
      <div className={`notification-container ${position}`}>
        {toastList.map((toast, i) => (
          <div 
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>
              X
            </button>
            <div className="notification-image">
              <IconView icon={toast.icon} />
            </div>
            <p className="notification-message">
              {toast.description}
            </p>
          </div>
        ))}
      </div>
    </ToastMain>
  );
}
