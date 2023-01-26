import React, {useState} from 'react';
import "./ContactForm.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function ContactForm() {
  
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/"; 
    navigate(path);
  }

  return (
    <>
     <form className='formx'>
            <div className="spandiv">
                <span>Before you go, please leave your contact details so we can get back to you...</span>
            </div>
            <input aria-label="Your name" onChange={(e)=>setName(e.target.value)} autocomplete="name" maxlength="56" name="name" placeholder="*Your name" required="" type="text" className='input' value={name}/>
            <input aria-label="Your email" onChange={(e)=>setEmail(e.target.value)} autocomplete="email" maxlength="56" name="email" placeholder="*Your email" required="" type="email" className='input' value={email}/>

            <button type="submit" class="submitBtn" onClick={routeChange}><Link style={{textDecoration:"none"}} to="/">Send your answer ⟶</Link></button>
     </form>
    </>
  )
}

export default ContactForm;