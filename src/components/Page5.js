import React from 'react';
import "./Page1.css";
import Video from './Video';
import ContactForm from './ContactForm';

function Page5() {
  return (
    <>
       <div className="left"><Video src="https://cdn.coverr.co/videos/coverr-young-man-working-at-a-cafe-2500/1080p.mp4" heading="Sign Up for a Newsletter!"/></div>
       <div className="right"><ContactForm/></div>
    </>
  )
}

export default Page5;