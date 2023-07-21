import React, { createContext, useState } from 'react'

const IdContext = createContext()

export function RoomIdProvider({children}) {
  const [roomId, setRoomId] = useState('');
  return (
    <IdContext.Provider value = {{roomId, setRoomId}} >
      {children}
    </IdContext.Provider>
  )
}

export default IdContext;