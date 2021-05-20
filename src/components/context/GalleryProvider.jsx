import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';

  const initialState = {
    imageCategorySelector: "Portraits",
  }

const actions = {
  CHANGE_IMGCAT: "CHANGE_IMGCAT",
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_IMGCAT:
      return { ...state, imageCategorySelector: action.value }
    default:
      return state
  }
}
const GalleryProviderCtx = createContext();

const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {
    imageCategorySelector: state.imageCategorySelector,
    setImageCategorySelector: value => {
      dispatch({ type: actions.CHANGE_IMGCAT, value })
    },
  }

  return (
    <GalleryProviderCtx.Provider value={value}>
      {children}
    </GalleryProviderCtx.Provider>
  )
}
export {GalleryProvider as default, GalleryProviderCtx};
