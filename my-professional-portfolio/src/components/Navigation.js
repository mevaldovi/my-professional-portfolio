
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({currentPage, setCurrentPage}) {
   
  return (
      <div className="nav1">
      <ul>
          <li id="list-item" onClick={() => setCurrentPage("About")}>
              About Me
          </li>
          <li id="list-item" onClick={() => setCurrentPage("Portfolio")}>
              Portfolio
          </li>
          <li id="list-item" onClick={() => setCurrentPage("Contact Me")}>
              Contact Me
          </li>
          <li id="list-item" onClick={() => setCurrentPage("Resume")}>
              Resume
          </li>
      </ul>
      </div>
  );
}

export default Navigation;