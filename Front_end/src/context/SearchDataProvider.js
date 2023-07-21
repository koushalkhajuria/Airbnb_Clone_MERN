import React, { createContext, useState } from 'react'

export const SearchDataContext = createContext({});

function SearchDataProvider({children}) {
  const [searchData, setSearchData] = useState('')
  return (
    <SearchDataContext.Provider value ={{searchData, setSearchData}}>
      {children}
    </SearchDataContext.Provider>
  )
}
export default SearchDataProvider