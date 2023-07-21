import React, { createContext, useState } from 'react'

export const HostContext = createContext({});

function BecomeHostProvider({children}) {
  const [hostData, setHostData] = useState({})
  return (
    <HostContext.Provider value={{hostData, setHostData}}>
      {children}
    </HostContext.Provider>
  )
}

export default BecomeHostProvider