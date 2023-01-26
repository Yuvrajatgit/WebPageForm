import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Page2 from "./components/Page2";
import Page1 from './components/Page1';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" index element={<Page1/>}/>
         <Route path='/campaign' element={<Page2/>}/>
         <Route path='/webinar' element={<Page3/>}/>
         <Route path='/3rd' element={<Page4/>}/>
         <Route path='/contactForm' element={<Page5/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
