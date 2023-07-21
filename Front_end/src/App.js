import LandingPage from './pages/LandingPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import CheckAuth from './components/Auth/CheckAuth';
import RoomPage from './pages/RoomPage';
import { RoomIdProvider } from './context/RoomIdProvider';
import { BookingProvider } from './context/BookingProvider';
import HostPage from './pages/HostPage';
import BecomeHostProvider from './context/BecomeHostProvider';
import ManagePage from './pages/ManagePage';
import BookingPage from './pages/BookingPage';
import ListingCardPage from './pages/ListingCardPage';
import MyBookingPage from './pages/MyBookingPage';
import SearchDataProvider from './context/SearchDataProvider';

function App() {
  return (
    
    <RoomIdProvider>
      <BookingProvider>
      <BecomeHostProvider>
      <SearchDataProvider>    
        <Router>
          <Routes>
              <Route path='/' Component={LandingPage}></Route>
              <Route path='/room' Component={RoomPage}></Route>
              <Route path='/room/bookings' Component={BookingPage}></Route>
              <Route path='/login' Component={LoginPage}></Route>
              <Route path='/register' Component={RegisterPage}></Route>
              <Route path='/becomehost' Component={HostPage}></Route>
              <Route path='/manage' Component={ManagePage}></Route>
              <Route path='/dashboard' Component={ListingCardPage}></Route>
              <Route path='/mybookings' Component={MyBookingPage}></Route>
          </Routes>
        </Router>
      </SearchDataProvider>
      </BecomeHostProvider>
      </BookingProvider>
    </RoomIdProvider>
  )
}

export default App;
