import React from 'react'

// Our global theme context with default values
export const Imagelistcontext = React.createContext({
  imageCategorySelector: 'Portraits',
  setImageCategorySelector: () => {},
})

// Theme provider component with state
const Imagelistprovider = props => {
  const [imageCategorySelector, setImageCategorySelector] = React.useState('Portraits')
  const value = { imageCategorySelector, setImageCategorySelector }

  return (
    <Imagelistcontext.Provider value={value}>
      {props.children}
    </Imagelistcontext.Provider>
  )
}
export default ({ element }) => <Imagelistprovider>{element}</Imagelistprovider>
