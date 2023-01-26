import React from 'react'
import Button2 from './Button2';
import { Link } from 'react-router-dom';
import "./Form.css";

function Form2(props) {
  return (
        <>
        <form className='form'>
            <div className='formDiv'>
            <Link style={{textDecoration:"none", background:"blue"}} to="/contactForm"><Button2 title={props.btnTitle}/></Link>
            </div>
        </form>
        </>
  )
}

export default Form2;