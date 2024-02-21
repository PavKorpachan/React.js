import React from 'react'
import './hero2.css'
import perehod3 from './pere3.png'
import perehod4 from './pere4.png'

const hero2 = () => {
  return (
      <div>
        <div className='h2'>
          <div className='h2_zaglav'>
            <p className='h2_zagl'>
              Enhanced financial journey at every step
            </p>
            <p className='h2_text1'>
              Our platform provides personalized financial guidance, tailored notifications, optimized security measures, and virtual consultations with experts. We’re committed to enhancing your financial journey at every step, so you can achieve your goals with ease
            </p>
          </div>
          <div className='t1488'>
            <div className='f1488'>
              <div className='g1488'>
                <div className='h2_shadow'></div>
                <p className='h2_text2'>
                  Marketing
                </p>
                <p className='h2_text3'>
                  Stay in the know with our marketing messages. We’ll keep you up-to-date on the latest product features, financial news, and insider tips to help you reach your goals.
                </p>
              </div>
              <div className='g1488'>
                <div className='h2_shadow'></div>
                <p className='h2_text2'>
                  Customer Support
                </p>
                <p className='h2_text3'>
                  Get instant support with our push notifications. Whether you need help setting up your account or have a question about a transaction, our customer support team is just a notification away.
                </p>
              </div>
            </div>
            <div className='f1488'>
              <div className='g1488'>
                <div className='h2_shadow'></div>
                <p className='h2_text2'>
                  Account Security
                </p>
                <p className='h2_text3'>
                  Stay Informed with our delivery alerts. We’ll keep you in yhe loop about any account activity, so you can stay on top of your finances and detect any fraudulent activity.
                </p>
              </div>
              <div className='g1488'>
                <div className='h2_shadow'></div>
                <p className='h2_text2'>
                  Sails
                </p>
                <p className='h2_text3'>
                  Stay up-to-date with our app updates. We’re constantly improving our platform to provide you with the best possible experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className='perehod4' src={perehod4} alt=''/>
        <img className='perehod3' src={perehod3} alt=''/>
      </div>
  )
}

export default hero2
