import React, { createContext } from "react";
import useModal from "../hooks/useModal";
import ModalDanger from "../components/Modal/Modal-danger";


let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <ModalDanger />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider }
