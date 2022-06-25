import React from 'react'
import './Message.css'

const Message = ({direction}) => {
  let position = (direction==='right'|| !direction)? "right" : "left"
  const messageClass = ['message',position].join(" ")
  return (
    <div  className={messageClass}>
      <p>dummy text</p>
      {direction==='right' && (<div className='message-detail'>
        <span>18:35</span>
        <img src="/images/tick.svg" alt="tick" />
        </div>)}
    </div>
  )
}

export default Message