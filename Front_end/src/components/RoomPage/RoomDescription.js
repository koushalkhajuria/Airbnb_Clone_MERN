import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './room.css';

function RoomDescription({data}) {
  return (
    <div className='room-description-container'>
      <div className='room-description'>{data.description}</div>
      <div className='room-rating-address-save'>
         <div className='room-rating'>
            &#9733; {data.rating} 
            <span className='room-address'>
            {data.location.address}, {data.location.city}, {data.location.country} 
            </span> 
          </div>
          <div className='room-save'>
            <FavoriteBorderIcon/>
            Save 
          </div>
      </div>
    </div>
  )
}

export default RoomDescription