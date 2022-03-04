// Hook
import { useEffect, useRef } from 'react';
export const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        setTimeout(handler, 200);
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    document.addEventListener('mouseover', maybeHandler);

    return () => {
      document.removeEventListener('mouseover', maybeHandler);
      document.removeEventListener('mouseover', maybeHandler);
    };
  });

  return domNode;
};
