import React, { useState} from 'react';
import '../Navbar/navBarComponent-rider.css';
const riderNavBar = () => {
const storedData = localStorage.getItem('rider');
const riderData = JSON.parse(storedData);
const riderId = riderData.userName;

  return (
        <div className='rider-home-navMenu' >
          <a href='/riderHome'>Rider Home</a>
          <a href='/riderLogin'>Find a Ride</a>
          <a href='/riderpastRides'>Past Rides</a>
          <a href='/homePage'>Logout</a>
        </div>


        );
};

export default riderNavBar;
