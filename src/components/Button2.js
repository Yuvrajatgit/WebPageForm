import React from 'react';
import "./Button2.css";

function Button2(props) {
  return (
    <div className='btn2'>
        <button className='btn'><span className='btnSpan2'>{props.title}</span></button>
    </div>
  )
}

export default Button2;