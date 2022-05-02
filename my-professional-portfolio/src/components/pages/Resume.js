import React from 'react';
import file from '../../files/Copy of Marie Valdovinos resume 2021 (12).pdf'



export default function getResume() {
  
    return (
      
        <div className="div2">
          <br></br>
          <h1 id="top">Resume</h1>
           <div className="img-div2">
              <img className="rounded-circle" id="avatar2" src="https://www.designbombs.com/wp-content/uploads/2021/05/resume-cv-templates-roundup.png"alt="..."></img>
            </div>
            <br></br><a className="hyperlink" href={file}
          download="resume" id="resume-link">Click to Download</a>
    </div>
    );
}
