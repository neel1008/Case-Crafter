import React, { useState, useEffect } from 'react';
import "./nd.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`DarkMode ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="zxc mr-36 my-2">

      <button  onClick={toggleDarkMode}  style={{ borderRadius: '8px' }}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

        </div>
      
      

    </div>
  );
};

export default DarkMode;