import * as React from 'react';
import { ModalContext } from '../contexts/modal/modal-context';

const useModal = () => {
  const modalContext = React.useContext(ModalContext);

  if (modalContext === undefined) {
    return Error("useModal must be used within a <ModalProvider />")
  }

  return modalContext;
}

export default useModal;
