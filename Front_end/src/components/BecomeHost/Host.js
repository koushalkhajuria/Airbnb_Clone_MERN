import React, { useContext, useEffect } from 'react'
import './host.css';
import logo from '../../assets/logo/logo.png'
import HostAddress from './HostAddress';
import Amenities from './Amenitites';
import AboutHome from './AboutHome';
import HostProfileForm from './HostProfile';
import SliderComponent from '../../assets/Slider/slider';
import HomeImages from './HomeImages';
import AuthContext from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function Host() {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const becomehostTitle = () => {
    

    return (
      <>
        <div className='become-host-title'>
          <img style={{width:'2.8rem'}} className='become-host-logo'  src={logo} alt="airbnb logo" />  
          <div>
            Become a Host
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    handleComponentRender();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const handleComponentRender = () => {
    if(auth?.data?.token){
    return (
      <div className='become-host-component'>
        <div className='become-host-container'>
        {becomehostTitle()}
          <SliderComponent>
            <HostAddress/>
            <AboutHome/>
            <Amenities/>
            <HostProfileForm/>
            <HomeImages/>
          </SliderComponent> 
        </div>
      </div>
    )}  else {
      navigate('/login', {state: {from: location}})
      return null;
    }
    }

  return (
    <div>
      {handleComponentRender()}
    </div>
  )
}


export default Host


