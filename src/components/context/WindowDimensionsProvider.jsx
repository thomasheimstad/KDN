import React, { createContext, useContext, useState, useEffect } from 'react';
const WindowDimensionsCtx = createContext(null);
const WindowDimensionsProvider = ({ children }) => {

  const [dimensions, setDimensions] = useState({
    windowWidth: '',
    windowHeight: ''
  });
  const handleResize = () => {
    let w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight
    setDimensions({
      windowWidth: x,
      windowHeight: y,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize();
    return () => { window.removeEventListener('resize', handleResize) }
  }, [handleResize]);
  return (
    <WindowDimensionsCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionsCtx.Provider>
  );
};
export default WindowDimensionsProvider;
export const useWindowDimensions = () => useContext(WindowDimensionsCtx);
