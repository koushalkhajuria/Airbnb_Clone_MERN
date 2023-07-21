import React, { createContext, useState } from 'react'

const BookingContext = createContext({});
  
export function BookingProvider({children}) {
  const [bookingData, setBookingData] = useState({});

  return (
    <BookingContext.Provider value={{bookingData, setBookingData}}>
        {children}
    </BookingContext.Provider>
  )
}

export default BookingContext