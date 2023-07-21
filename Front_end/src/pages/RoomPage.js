import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header'
import Room from '../components/RoomPage/RoomDescription';
import RoomImgContainer from '../components/RoomPage/RoomImgContainer';
import RoomSummary from '../components/RoomPage/RoomSummary';
import IdContext from '../context/RoomIdProvider';
import SpinLoader  from '../assets/spinner/spinner';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';


function RoomPage() {
  const {roomId} = useContext(IdContext);
  const axiosPrivates = useAxiosPrivate();
  const navigate = useNavigate();
  const {auth} = useContext(AuthContext);
  const location = useLocation();
  const [individualRoomData, setIndividualRoomData] = useState({});

  const isObjectWithData = individualRoomData && Object.keys(individualRoomData).length !== 0;
  
  useEffect( ()=> {
    async function fetchData() {
      try{
        console.log(auth)
        const response = await axiosPrivates.get(`/${roomId._id}`,{
          withCredentials:true
        })
        setIndividualRoomData(response.data.data)
      } catch (err) {
        console.log(err)
        navigate('/login', {state: {from: location}, replace: true})
        console.error(err);
      }     
    }
    fetchData();
  },[roomId._id])
  return (
    <>
      <Header/>
        {isObjectWithData ? (
          <>
            <Room data = {individualRoomData} />
            <RoomImgContainer  data = {individualRoomData}/>
            <RoomSummary data = {individualRoomData} />
          </>
        ) : (
          <SpinLoader />
        )}
    </>
  )
}

export default RoomPage