import React, { useContext, useState } from 'react';
import { Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SetProfileForm from './SetProfileForm';
import { showNotification } from '../../assets/alerts/sweetAlert';
import AuthContext from '../../context/AuthProvider';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const SetProfileFinal = (item) => {
  const {auth} = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate();
  const [openCard3, setOpenCard3] = useState(false);

  const handleOpenCard3 = () => {
    setOpenCard3(true);
  };

  const handleCloseCard3 = () => {
    setOpenCard3(false);
  };

  const handleSaveCard3 = (data) => {
    const host = {...data}
    updateHostProfile(item?._id, {host})
    handleCloseCard3();
  };

  const updateHostProfile = async (id, data) => {
    try {
      const response = await axiosPrivate.patch(`/${id}`, data);
      showNotification(response.data.status, response.data.message);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Grid sx={{textAlign:'center'}}  item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
          <h2>Profile</h2>
          <h3>Update Host Profile</h3>
          <p>Edit photo, name and about host</p>
          <Button  sx={{backgroundColor:'#ff385c', color: '#fffff'}} variant="contained"  onClick={handleOpenCard3}>Edit Profile</Button>
          <Dialog open={openCard3} onClose={handleCloseCard3}>
            <DialogTitle>Host Profile</DialogTitle>
            <DialogContent>
              <SetProfileForm handleSaveCard3={handleSaveCard3} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseCard3}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Grid>
    </>
  );
};

export default SetProfileFinal;
