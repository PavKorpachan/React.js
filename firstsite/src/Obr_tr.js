import React from 'react'
import TTTT1 from './images/TTTT1.jpg'
import TTTT2 from './images/TTTT2.jpg'
import TTTT3 from './images/TTTT3.jpg'
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion'

const Obr_tr = () => {
    const [hoverState1, sethover1] = React.useState(false);
    const [hoverState2, sethover2] = React.useState(false);
    const [hoverState3, sethover3] = React.useState(false);
  return (
    <div id='obr_tr'>
        <div id='div_name_obr_tr'>
            <p id='name_obr_tr'>Образовательные траектории</p>
        </div>
        <div id='all_traek'>
        
        <motion.div id='traek1'
        onHoverStart = {()=> {
            sethover1(hoverState1 => true);
        }}
        onHoverEnd = {()=> {
            sethover1(hoverState1 => false);
        }}
        >
            <motion.img id='traek11' src={TTTT1} alt=''/>
            <div id='traek111'>
                <motion.p id='traek_text1'
                animate = {{y: hoverState1 ? 0:35}}
                transition = {{duration: 0.15}}
                >
                    Дошкольник и младшая школа
                </motion.p>
                <motion.div
                animate = {{y: hoverState1 ? 0:-35, opacity: hoverState1 ? 1:0}}
                transition = {{duration: 0.15}}
                >
                    <Button variant="outline-secondary">подробнее</Button>
                </motion.div>
            </div>
        </motion.div>
        <motion.div id='traek2'
        onHoverStart = {()=> {
            sethover2(hoverState2 => true);
        }}
        onHoverEnd = {()=> {
            sethover2(hoverState2 => false);
        }}
        >
            <motion.img id='traek22' src={TTTT2} alt=''/>
            <div id='traek222'>
                <motion.p id='traek_text1'
                animate = {{y: hoverState2 ? 0:35}}
                transition = {{duration: 0.15}}
                >
                    Дошкольник и младшая школа
                </motion.p>
                <motion.div
                animate = {{y: hoverState2 ? 0:-35, opacity: hoverState2 ? 1:0}}
                transition = {{duration: 0.15}}
                >
                    <Button variant="outline-secondary">подробнее</Button>
                </motion.div>
            </div>
        </motion.div>
        <motion.div id='traek3'
        onHoverStart = {()=> {
            sethover3(hoverState3 => true);
        }}
        onHoverEnd = {()=> {
            sethover3(hoverState3 => false);
        }}
        >
            <motion.img id='traek33' src={TTTT3} alt=''/>
            <div id='traek333'>
                <motion.p id='traek_text3'
                animate = {{y: hoverState3 ? 0:35}}
                transition = {{duration: 0.15}}
                >
                    Дошкольник и младшая школа
                </motion.p>
                <motion.div
                animate = {{y: hoverState3 ? 0:-35, opacity: hoverState3 ? 1:0}}
                transition = {{duration: 0.15}}
                >
                    <Button variant="outline-secondary">подробнее</Button>
                </motion.div>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Obr_tr
