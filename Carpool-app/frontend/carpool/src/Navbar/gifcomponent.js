import React, { useState} from 'react';
import '../Navbar/gifcomponent.css';
const gifComponent = () => {
const storedData = localStorage.getItem('driver');
const driverData = JSON.parse(storedData);
const driverId = driverData.userName;

  return (
          <div className='driver-seacrh-gif-container'>
            <img className="driver-carpool-gif" src="https://www.jojobrt.com/wp-content/uploads/2022/02/attuare_progetto_carpooling_PSCL.gif"/>
          </div>


        );
};

export default gifComponent;
