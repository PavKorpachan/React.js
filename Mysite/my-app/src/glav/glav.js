import React from 'react'
import './glav.css'
import bg from './bg1.png'
import down from './download.svg'
import google from './google.svg'
import apple from './apple.svg'
import perehod1 from './pere1.png'
import perehod2 from './pere2.png'

const glav = () => {
  return (
    <div className='glav'>
        <img className='bg1' src={bg} alt='' />
        <div className='nav'>
            <p className='logo'>
                PocketPal
            </p>
            <div className='nav_mini'>
                <p className='nav_mini_text'>
                    Home
                </p>
                <p className='nav_mini_text'>
                    About
                </p>
                <p className='nav_mini_text'>
                    Testimonials
                </p>
                <p className='nav_mini_text'>
                    Contact
                </p>
            </div>
            <img src={down} alt='' />
        </div>
        <div className='glav_text_flex'>
            <div className='glav_text'>
                <p>
                    Take  control of your finances with our <span>Budgeting</span> tool
                </p>
                <p className='glav_text_mini'>
                    Set a budget, track your spending, and reach your financial goals with our easy-to-use budgeting app. Get alerts as you approach your budget limits and stsy on track to financial freedom. Download the app now and take control of your finances
                </p>
                <div className='glav_text_svg'>
                    <img src={apple} alt='' />
                    <img src={google} alt='' />
                </div>
            </div>
        </div>
        <div className='glav_pere'>
            <img className='pere1' src={perehod1} alt='' />
            <img className='pere2' src={perehod2} alt='' />
        </div>
    </div>
  )
}

export default glav
