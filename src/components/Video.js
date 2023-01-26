import React from 'react';
import "./Video.css";

function Video(props) {
  return (
    <div>
      <video className='video' preload='auto' autoPlay muted loop src={props.src}/>
      <div className='content'>
        <h1>{props.heading}</h1>
      </div>
    </div>
  )
}

export default Video;