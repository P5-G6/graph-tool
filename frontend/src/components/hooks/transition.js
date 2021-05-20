import React, { useState, useRef, useCallback } from 'react';

/* 
  NOTE:
  MODES: 
    showing
    hidden
    open-transition
    close-transition
*/

export default function useTransiion({
  visible = false,
  onDismiss,
  duration = 500,
}) {
  const [mode, setMode] = useState('hidden');
  const timeRef = useRef(null);

  const handleChange = useCallback(() => {
    if (visible && mode === 'hidden') {
      setMode('open-transition');
    } else if (!visible && mode === 'showing') {
      setMode('close-transition');
    } else {
      timeRef.current = setTimeout(() => {
        setMode(visible ? 'showing' : 'hidden');
      }, duration - 10);
    }
  }, [visible, mode, duration]);

  const handleDismiss = useCallback(() => {
    if (onDismiss) onDismiss();
  }, [onDismiss]);

  React.useEffect(() => {
    handleChange();
    return () => {
      clearTimeout(timeRef.current);
    };
  }, [visible, handleChange]);

  return { mode, dismiss: handleDismiss };
}
