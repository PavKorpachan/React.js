import React from 'react'
import TTTT1 from './images/TTTT1.jpg'
import TTTT2 from './images/TTTT2.jpg'
import TTTT3 from './images/TTTT3.jpg'
import { Button } from 'react-bootstrap';
const Obr_tr = () => {
  return (
    <div id='all_traek'>
        <div id='traek1'>
            <img id='traek11' src={TTTT1} alt=''/>
            <div id='traek111'>
                <p id='traek_text1'>Дошкольник и младшая школа</p>
                <Button variant="outline-secondary">Secondary</Button>
            </div>
        </div>
        <div id='traek2'>
            <img id='traek22' src={TTTT2} alt=''/>
            <div id='traek222'>
                <p id='traek_text2'>Средняя школа</p>
                <Button variant="outline-secondary">Secondary</Button>
            </div>
        </div>
        <div id='traek3'>
            <img id='traek33' src={TTTT3} alt=''/>
            <div id='traek333'> 
                <p id='traek_text3'>Старшая школа и взрослые</p>
                <Button variant="outline-secondary">Secondary</Button>
            </div>
        </div>
    </div>
  )
}

export default Obr_tr
