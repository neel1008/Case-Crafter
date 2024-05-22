// import React from 'react';
// import "./nd.css";
// import DarkMode from '../components/DarkMode'; // Adjust the path to match the actual location

// export default function Navbar(props) {
//   return (
   
//     <div>
//   <nav className="navbar navbar-expand-lg navbar-light">
//     <div className="container-fluid">
//       <div className="d-flex align-items-center"> {/* Flex container for left side */}
//         <a className="navbar-brand" href="/">{props.title}</a> {/* Title at left */}
//       </div>
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         data-bs-toggle="collapse" 
//         data-bs-target="#navbarSupportedContent" 
//         aria-controls="navbarSupportedContent" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Use ms-auto to push items to the right */}
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">About Us</a>
//           </li>
//           <li className="nav-item">
//             <DarkMode />
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </div>

//   );
// }
// 

import React, { useState } from 'react';
import "./nd.css";
import DarkMode from '../components/DarkMode'; // Adjust the path to match the actual location

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-black' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <div className="d-flex align-items-center"> {/* Flex container for left side */}
            <a className={`navbar-brand ${isDarkMode ? 'text-white' : 'text-dark'}`} href="/">{props.title}</a> {/* Title at left */}
          </div>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${isDarkMode ? 'text-white' : 'text-dark'}`}> {/* Use ms-auto to push items to the right */}
              <li className="nav-item">
                <a className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isDarkMode ? 'text-white' : 'text-dark'}`} href="/">About Us</a>
              </li>
              <li className="nav-item">
                <DarkMode />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

