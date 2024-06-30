import { useEffect } from 'react';
import ProgressBar from './ProgressBar';

const MAX_TIME = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, MAX_TIME);

    // Cleanup function: we need to clear the setTimeout() to fix infinite loop
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]); // useConfirm is a function from App component, and we wrap the function from App component with useCallback to avoid infinite loop

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={MAX_TIME} />
    </div>
  );
}
