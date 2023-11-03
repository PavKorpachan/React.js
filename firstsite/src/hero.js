import React from 'react'
import { Button } from 'react-bootstrap';
import bg from './images/Frame_122_1.svg';

const hero = () => {
  return (
    <div id="glavbut">
      <div id="but">
        <p id="text">
          Образовательный центр
          нового поколения
          для всех возрастов
        </p>
        <Button>Записаться!</Button>
      </div>
      <div id="but2">
        <Button variant="secondary">a</Button>
        <Button variant="secondary">b</Button>
        <Button variant="secondary">c</Button>
        <Button variant="secondary">d</Button>
      </div>
      <img id="bg" src={bg} alt=''/>
    </div>
  )
}

export default hero
