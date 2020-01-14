import { useState } from 'react';

const useDrawer = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [
    isShowing,
    toggle,
  ]
};

export default useDrawer;