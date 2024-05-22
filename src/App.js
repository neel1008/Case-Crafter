import './App.css';
// import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React from 'react';

function App() {
  return (
    <>
      <Navbar title='CASE-CRAFTER'  className="mb-5">
          {/* <DarkMode /> */}
       
      </Navbar>
      <div className="mx-2 mt-5">
        <Textarea heading='Enter the text below :' />
      </div>
    </>
  );
}

export default App;
