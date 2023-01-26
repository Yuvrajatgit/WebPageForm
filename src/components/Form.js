import React from 'react'
import Button from './Button';
import "./Form.css";
import { Link } from "react-router-dom";

function Form() {
  return (
        <form className='form' onSubmit={(e)=>{e.preventDefault()}}>
            <div className='formDiv'>
            <Link style={{textDecoration:"none"}} to='/campaign'><Button option="A" title="Campaign structure"/></Link>
            <Link style={{textDecoration:"none",background:"rgb(125, 0, 254)"}} to='/webinar'><Button option="B" title="Learn Facebook Basics"/></Link>
            <Link style={{textDecoration:"none"}} to='3rd'><Button option="C" title="3rd choice"/></Link>
            </div>
        </form>
  )
}

export default Form;