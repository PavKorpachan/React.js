import React from 'react'
import logo from './images/logo.svg';


const Navbar = () => {
  return (  
    <div id="wrapper">
        <div id="photo">
            <img src={logo} alt=''/>
        </div>
        <div id="nav">
            <h1>
                Расписание
            </h1>
            <h1>
                Мероприятия
            </h1>
        </div>
        <div id="all_elems">
            <div id="elem1"></div>
            <div id="elem2"></div>
            <div id="elem3"></div>
            <div id="elem4">
                <button id="but_elem4" variant="primary">
                    +7 (980) 658 80 70
                </button>
            </div>
        </div> 
        <div id="text">
        </div>
    </div>
  )
}

export default Navbar
