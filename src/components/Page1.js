import React from 'react';
import "./Page1.css";
import Video from './Video';
import Form from './Form';

function Page1() {
  return (
    <>
       <div className="left"><Video src="https://cdn.coverr.co/videos/coverr-a-man-looking-at-christmas-pictures-on-his-computer-2695/1080p.mp4" heading="Welcome"/></div>
       <div className="right"><Form/></div>
    </>
  )
}

export default Page1;