import React from 'react';
import "./Page1.css";
import Video from './Video';
import Form2 from './Form2';

function Page3() {
  return (
    <>
       <div className="left"><Video src="https://cdn.coverr.co/videos/coverr-man-looking-at-the-shore-from-a-boat-4744/1080p.mp4" heading="Funnel 3: webinar sign up"/></div>
       <div className="right"><Form2 btnTitle="Sign up for free webinar"/></div>
    </>
  )
}

export default Page3;