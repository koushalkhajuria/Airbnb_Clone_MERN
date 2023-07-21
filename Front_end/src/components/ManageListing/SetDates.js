import React, { useContext, useState } from 'react';
import { Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import AuthContext from '../../context/AuthProvider';
import { showNotification } from '../../assets/alerts/sweetAlert';
import { useLocation, useNavigate } from 'react-router-dom';

const SetDates = ({item}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPrivate = useAxiosPrivate();
  const start = item?.stayDate?.startDay? item.stayDate.startDay : ''
  const end = item?.stayDate?.endDay? item.stayDate.endDay : ''
  const [startDay, setStartDay] = useState(start);
  const [endDay, setEndDay] = useState(end);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const stayDate = {startDay, endDay};
    updateHostData(item?._id, {stayDate});
    handleClose();
  };

  const updateHostData =async  (id, data) => {
    try {
      const response = await axiosPrivate.patch(`/${id}`, data);
      showNotification(response.data.status, response.data.message);
    } catch (err) {
      console.error(err)
        navigate('/login', {state:{from: location}, replace: true})
    }
  }

  return (
    <>
      <Grid sx={{textAlign:'center'}} item xs={12} sm={6} md={4}>
        <Paper  elevation={2} sx={{ p: 2, height: '100%' }}>
          <h2>Staying Date</h2>
          <h3>Staying Period Availablility</h3>
          <p>Update the Staying period Availablility</p>
          <Button variant="contained" sx={{backgroundColor:'#ff385c', color: '#fffff'}} onClick={handleOpen}>Set Dates</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Set Dates</DialogTitle>
            <DialogContent>
              <Grid container spacing={4}>
                <Grid item marginTop={2} xs={6}>
                  <TextField
                    label="Start Day"
                    type="date"
                    value={startDay}
                    onChange={(event) => setStartDay(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </Grid>
                <Grid item marginTop={2} xs={6}>
                  <TextField
                    label="End Day"
                    type="date"
                    value={endDay}
                    onChange={(event) => setEndDay(event.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </Grid>
    </>
  );
};

export default SetDates;
