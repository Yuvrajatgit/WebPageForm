import React from 'react';
import "./Page1.css";
import Video from './Video';
import Form2 from './Form2';

function Page2() {
  return (
    <>
       <div className="left"><Video src="https://cdn.coverr.co/videos/coverr-a-guy-walks-with-a-smartphone-7884/1080p.mp4" heading="Funnel 2: freebie or coaching"/></div>
       <div className="right"><Form2 btnTitle='Download "Campaign Structure Guide"'/></div>
    </>
  )
}

export default Page2;