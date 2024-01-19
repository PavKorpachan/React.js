import React from 'react'
import './hero1.css'
import bg from './bg2.png'
import tel1 from './tel1.png'
import tel2 from './tel2.png'
import tel3 from './tel3.png'


const hero1 = () => {
  return (
    <div className='hero1'> 
        <img className='bg2' src={bg} alt='' />
        <div className='hero1_text'>
            <p className='hero1_text1'>
                How PocketPal works
            </p>
            <p className='hero1_text2'>
                PocketPal simplifies the process and makes it easy for you to achieve your goals. Just sign up, set your savings target, and let our automated tools do the rest. YOu can earn interest on your money, track your progress, and get helpful reminders and tips to stay on track. It’s that simple!
            </p>
        </div>
        <div className='tel_flex1'>
            <img className='tel1' src={tel1} alt='' />
            <div className='tel_flex2'>
                <img className='tel2' src={tel2} alt='' />
                <img className='tel3' src={tel3} alt='' />
            </div>
        </div>
    </div>
  )
}

export default hero1
