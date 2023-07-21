import React, { useContext } from 'react'
import BookingContext from '../context/BookingProvider'
import BookRoom from '../components/Booking/BookRoom';
import Header from '../components/Header/Header';

function BookingPage() {
  const {bookingData} = useContext(BookingContext);
  return (
    <>
      <Header/>
      <BookRoom/>
    </>
  )
}

export default BookingPage;