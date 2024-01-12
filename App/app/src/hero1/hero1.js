import React from 'react'
import './hero1.css';

const hero1 = () => {
  return (
    <div className='glavglav'>
      <div className='dum'>
        <p className='dum_text1'>
            Что думают потребители
        </p>
        <p className='dum_text2'>
            Стараясь апеллировать исключительно к разуму потребителя, 
            вы рискуете вообще не привлечь его внимания
        </p>
      </div>
      <div className='resh'>
        <p className='resh_zaglav'>
            Как потребители принимают решение
        </p>
        <div className='resh_flex1'>
            <div className='resh_flex2'>
                <div className='resh_mini'> 
                    <p className='resh_mini_zaglav'>
                        Выбирая знакомое
                    </p>
                    <p className='resh_mini_text'>
                        Чем лучше известны вы станете своим потребителям, тем большего успеха добьетесь.
                    </p>
                </div>
                <div className='resh_mini'> 
                    <p className='resh_mini_zaglav'>
                        Выбирая “приемлемый вариант”
                    </p>
                    <p className='resh_mini_text'>
                        Люди не стремятся к тому, чтобы сделать наилучший выбор, они лишь не хотят сделать плохой. Сделайте так, чтобы вас считали хорошим выбором. После этого исключите все, что может создать о вас впечатление как о плохом выборе.
                    </p>
                </div>
            </div>
            <div className='resh_flex2'>
                <div className='resh_mini'> 
                    <p className='resh_mini_zaglav'>
                        Используя самую свежую информацию
                    </p>
                    <p className='resh_mini_text'>
                    Компании, которые часто выступают с презентациями, хорошо знают, как действует эффект актуальности. Эти компании прилагают все усилия, чтобы начать рекламную кампанию последними в отрасли.
                    </p>
                </div>
                <div className='resh_mini'> 
                    <p className='resh_mini_zaglav'>
                        Под влиянием принципа предвзятости 
                    </p>
                    <p className='resh_mini_text'>
                        Люди, у которых мало времени, склонны формировать поспешные суждения на основе своих первых впечатлений и затем основывать на них все последующие решения. Определите существующие в отношении вас предвзятости и сделайте так, чтобы они были благоприятными.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default hero1
