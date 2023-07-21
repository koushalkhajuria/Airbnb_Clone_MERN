import React from 'react'

function RoomImgContainer({data}) {

 const imageRender = (val, index) => {

  return <div className='room-image-secondary-child' key={index}> 
          <img className="room-image" src={`data:image/jpeg;base64,${val.data}`} alt='room'></img>
        </div>
 }


  return (
    <div className='room-image-container'>
      <div className='room-image-primary'>
        <img className="room-image" src={`data:image/jpeg;base64,${data.images[0].data}`} alt='room'></img>
      </div>
      <div className='room-image-secondary'> 
        {data.images.slice(1).map(imageRender)}
      </div>
  </div>
  )
}

export default RoomImgContainer