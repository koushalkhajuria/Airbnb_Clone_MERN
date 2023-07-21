import React from 'react'
import RoomReserve from './RoomReserve'

function RoomSummary({data}) {

  const roomContent = () => {
    return (
      <div className='room-content-container'>
      <div className='room-content'>
        <div className='room-content-title'>
          {data.title} hosted by {data.host.name}
        </div>
        <div className='room-content-specs'>
          {data.guestCapacity} guests | {data.bedrooms} bedrooms | {data.bed} beds | {data.bathroom} bathrooms
        </div>
        
      </div>
      <div className='room-host-profile'>
        <img src={`data:image/jpeg;base64,${data.host.profile.data}`} alt='host'></img>
      </div>
    </div>
    )
  }

  const hostContent = () => {
    return (
      <div className='host-content-container'>
        <h3 className='host-content-title'>About Host</h3>
        {data.host.about}
      </div>
    )
  }
  const aboutSpace = () => {
    return (
      <div className='host-content-container'>
        <h3 className='host-content-title'>About this Space</h3>
        {data.aboutThisSpace}
      </div>
    )
  }

  const amenities = (data, index) => {
    return (
      <div key={index} className='amenities'> {data} </div>
    )
  }
  return (
    <div className='individual-room-container'>
      <div className='room-summary-container'>
        {roomContent()}
        {hostContent()}
        {aboutSpace()}
        <h3 >What we provide</h3>
        <div className='amenities-container'>
          {data.amenities.map(amenities)}
        </div>
      </div>
      <div className='room-reserve-form-container'>
        <RoomReserve data={data}/>
      </div>
    </div>
  )
}

export default RoomSummary