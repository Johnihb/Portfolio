import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="" id='window-header'>
        <WindowControls target='contact' />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        {/* //TODO :update image url */}
        <img src="/images/amrit-2.jpg" alt="Amrit portrait" className='w-20 rounded-full' />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just want to chat about tech? I'm in.</p>

        <p>-keshwor12@gmail.com <br />  -amritxtha072@gmail.com</p>

        <ul>
          {
            socials.map(({ id, bg, link, icon, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                  <img src={icon} alt={text} className='size-5' />
                  <p>{text}</p>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')




export default ContactWindow