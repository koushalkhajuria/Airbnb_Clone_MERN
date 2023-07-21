import React, { useContext } from 'react';
import { Container, Grid, } from '@mui/material';
import SetPricing from './SetPricing';
import SetDates from './SetDates';
import SetProfileFinal from './SetProfileFinal';
import IdContext from '../../context/RoomIdProvider';
import AuthContext from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const ManageListing = () => {
  const {roomId} = useContext(IdContext);
  const {auth} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const handleComponentRender = () => {
    if(auth?.data?.token){
    return (
      <Container sx={{margin: '3rem auto'}} className='manage-listing-dashboard'>
      <Grid container  spacing={10}>
        <SetDates item={roomId}/>
        <SetPricing item={roomId}/>
        <SetProfileFinal item={roomId}/>
      </Grid>
    </Container>
    )}  else {
      navigate('/login', {state: {from: location}})
      return null;
    }
    }

  return (
    <>
      {handleComponentRender()}
    </>
  );
};

export default ManageListing;
