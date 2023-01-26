import React from 'react';
import "./Page1.css";
import Video from './Video';
import Form2 from './Form2';

function Page4() {
  return (
    <>
       <div className="left"><Video src="https://cdn.coverr.co/videos/coverr-a-blurry-shot-of-a-guy-using-a-smartphone-7379/1080p.mp4" heading="Funnel 4: Third Choice"/></div>
       <div className="right"><Form2 btnTitle="This is the 3rd Choice"/></div>
    </>
  )
}

export default Page4;