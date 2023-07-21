import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { styled } from "@mui/material/styles";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: var(--medium-grey);
  &.Mui-selected {
    color: var(--theme);
  }
`);


  return (
    <div className='bottom-nav'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction className='bottom-nav-option' label="Explore" icon={<SearchRoundedIcon sx={{fontSize:"1.5rem"}}/>} />
        <BottomNavigationAction className='bottom-nav-option' label="Wishlists" icon={<FavoriteBorderIcon sx={{fontSize:"1.5rem"}}/>} />
        <BottomNavigationAction className='bottom-nav-option' label="Log in" icon={<AccountCircleOutlinedIcon sx={{fontSize:"1.5rem"}}/>} />
      </BottomNavigation>
    </div>
  );
}