import React from 'react';
import file from '../../files/Marie Valdovinos resume 2021 (1).pdf'



export default function getResume() {
  
    return (
      
        <div class="div2">
          <br></br>
          <h1 id="top">Resume</h1>
           <div class="img-div2">
              <img class="rounded-circle" id="avatar2" src="https://www.designbombs.com/wp-content/uploads/2021/05/resume-cv-templates-roundup.png"></img>
            </div>
            <br></br><a class="hyperlink" href={file}
          download="resume" id="resume-link">Click to Download</a>
    </div>
    );
}
