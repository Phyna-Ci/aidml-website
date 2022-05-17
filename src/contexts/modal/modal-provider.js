import React, { useReducer } from 'react';
import { ModalContext } from './modal-context';
const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
