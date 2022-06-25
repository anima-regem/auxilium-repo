import React from 'react'
import './ChatBot.css'
import Message from '../Message/Message'
import footerIcon from "../../images/footer-icon.png"
import infoIcon from '../../images/info.svg'
import closeIcon from "../../images/close.svg"
import sendIcon from "../../images/send.svg"

const ChatBot = () => {
  return (
    <div className='chatbot'>
    <header className='chat__header'>
        <div className="chat__container">
          <div className="logo">
              <img src={footerIcon} alt="logo" />
              <span>live chat</span>
          </div>
          <div className="user">
              <h3>Tony stark</h3>
              <p>online</p>
          </div>
          <div className="icon">
              <button><img src={infoIcon} alt="info" /></button>
              <button><img src={closeIcon} alt="close" /></button>
          </div>
        </div>
    </header>
    <section className='message_section'>
      <div className="section_container">
              <ul>
                <Message direction='left'/>
                <Message direction='right'/>
                <Message direction='left'/>
              </ul>
      </div>
    </section>
    <form className='chat_input'>
      <input placeholder='Type a message...' type="text" />
      <button className='send-btn' type='submit'><img src={sendIcon} alt="" /></button>
    </form>
    </div>
  )
}

export default ChatBot