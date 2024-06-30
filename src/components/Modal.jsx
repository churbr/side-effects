import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
  const dialog = useRef();
  // At first, this dialog variable is undefined because the JSX code hasn't been returned yet
  // That's the reason why we put the if statement inside useEffect()
  // Because useEffect will be executed once JSX is already returned
  // And once JSX is returned, the dialog variable will then have a value
  // And we will NOT encounter undefined variable type of errors

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  /**
   * Effect dependencies are simply prop or state values that are used inside of effect function.
   * So, any value that causes the component function to execute again.
   */

  return createPortal(
    <dialog className="modal" onClose={onClose} ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
