import React from 'react'

function RoomImgContainer({data}) {

  const base64String = (img) => {
    const ig =  btoa(String.fromCharCode.apply(null, img));
    return ig
  }

 const imageRender = (val, index) => {
  return (
    <div className='room-image-secondary-child' key={index}> 
    <img className="room-image" src={`data:${val.mimetype};base64,${base64String(val.data.data)}`} alt='room'></img>
    </div>
    )
 }


  return (
    <div className='room-image-container'>
      <div className='room-image-primary'>
        <img className="room-image" src={`data:${data.images[0].mimetype};base64,${base64String(data.images[0].data.data)}`} alt='room'></img>
      </div>
      <div className='room-image-secondary'> 
        {data.images.slice(1).map(imageRender)}
      </div>
  </div>
  )
}

export default RoomImgContainer