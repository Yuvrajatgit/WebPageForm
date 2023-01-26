import React from 'react';
import "./Button.css";

function Button(props) {
  return (
    <div>
        <button className='btn'><span className='btnSpan'>{props.option}</span><span className='btnSpan2'>{props.title}</span></button>
    </div>
  )
}

export default Button;