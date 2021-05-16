import React, { createContext, useContext, useState, useEffect } from 'react';
const GalleryProviderCtx = createContext(null);
const GalleryProvider = ({ children }) => {
  //copied from Masonry2

  const [imageList, setImageList] = useState();



  return (
    <GalleryProviderCtx.Provider value={[imageList, setImageList]}>
      {children}
    </GalleryProviderCtx.Provider>
  );
};
export default GalleryProvider;
export const useGalleryProvider = () => useContext(GalleryProviderCtx);
