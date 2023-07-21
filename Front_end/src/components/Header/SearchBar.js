import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchDataContext } from '../../context/SearchDataProvider';



const SearchBar = (props) => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const {setSearchData} = useContext(SearchDataContext);
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(0);
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInDateChange = (e) => {
    // const formatted = formatDate(e.target.value)
    setCheckInDate(e.target.value);
  };
  
  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };
  

  const handleGuestIncrement = () => {
    setGuests(guests + 1);
  };

  const handleGuestDecrement = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  // const formatDate = (inputDate) => {
  //   const date = new Date(inputDate);
  //   const options = { day: 'numeric', month: 'long', year: 'numeric' };
  //   return date.toLocaleDateString('en-GB', options);
  // };

 
  
  const handleSearch = (e) => {
    const searchData = {location, checkInDate, checkOutDate, guests};
    setSearchData(searchData);
    props.onSearch();
    setLocation("");
    setCheckInDate('');
    setCheckOutDate('');
    setGuests(0);
    navigate('/');
  };

  return (
    <div className="dropdown-search-bar">
      <div className="dropdown-input-wrapper">
        <label htmlFor="location" className="dropdown-input-label">Location</label>
        <input
          id="location"
          className="dropdown-search-input"
          type="text"
          placeholder="Where are you going?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="dropdown-input-wrapper">
        <label htmlFor="checkInDate" className="dropdown-input-label">Check-in</label>
        <input  
          id = "checkInDate"
          className='dropdown-search-input'
          type = "date"
          name= "checkInDate"
          value = {checkInDate}
          placeholder='check-in date'
          onChange={handleCheckInDateChange}/>
      </div>
    
      <div className="dropdown-input-wrapper">
        <label htmlFor="checkOutDate" className="dropdown-input-label">Check-out</label>
        <input 
          type='date'
          id="checkOutDate"
          className="dropdown-search-input"
          value={checkOutDate}
          onChange={handleCheckOutDateChange} 
          placeholder='check-out date'
        />
      </div>
      <div className="dropdown-input-wrapper">
        <label htmlFor="guests" className="dropdown-input-label">Guests</label>
        <div className="dropdown-guests-input">
          <button
            className="dropdown-guests-button"
            type="button"
            onClick={handleGuestDecrement}
          >
            -
          </button>
          <span className="dropdown-guests-count">{guests}</span>
          <button
            className="dropdown-guests-button"
            type="button"
            onClick={handleGuestIncrement}
          >
            +
          </button>
        </div>
      </div>
      <button className="dropdown-search-button" onClick={handleSearch} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
