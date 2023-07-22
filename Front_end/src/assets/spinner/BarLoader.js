import React from 'react';
import { BeatLoader } from 'react-spinners';


function BarLoader() {
  return (
    <BeatLoader cssOverride={{marginLeft:'45%', marginTop:"50%"}} size={"1vw"} color={'#123abc'} loading={true}/>
  )
}

export default BarLoader;



