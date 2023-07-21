

import { ClipLoader } from 'react-spinners';



function spinLoader () {
  return <ClipLoader cssOverride={{marginLeft:'45%', marginTop:"10vh"}} size={"10vw"} color={'#123abc'} loading={true}/>
}

export default spinLoader;
