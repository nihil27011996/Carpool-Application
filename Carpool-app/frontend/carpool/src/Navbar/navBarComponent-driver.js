import React from 'react';
import '../Navbar/navBarComponent-driver.css';
import { useDispatch } from 'react-redux';
import { removeDriver } from '../Slice/driverSlice';

const DriverNavBar = ({driver}) => {
/* const storedData = localStorage.getItem('driver');
const driverData = JSON.parse(storedData); */
const driverId = driver?.userName;
const dispatch = useDispatch();
const handleLogoutButton = () => {
  dispatch(removeDriver());
}

  return (
        <div className='driver-home-navMenu' >
          <a href='/driverHome'>Driver Home</a>
          <a href='/driverLogin'>Post a Ride</a> 
          <a href='/pastRides'>Past Rides</a> 
          <a href='/driverApproval'>Request Approval</a> 
          <a href='/homePage' onClick={handleLogoutButton}>Logout</a>
        </div>


        );
};

export default DriverNavBar;
