// We separate this function to another component because this component re-renders every 10 milliseconds

import { useEffect, useState } from 'react';

// And thats a waste of performance, and this way... it is optimized
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
