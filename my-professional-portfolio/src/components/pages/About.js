import React from "react";
import pic from "../../images/IMG_8705.jpg";

export default function About() {
  return (
    <div className="div1">
      <h1 id="top">About Me</h1>
      <br></br>
      <h5 class="card-title"></h5>
      <img src={pic} class="rounded-circle" id="avatar1" alt="..." />
      <br></br>
      <br></br>
      <p>
      Full stack web developer providing creative
perspectives on how users interact with the web.
<br />
 Earned certificate in Full Stack Web Development from the
University of Texas of Austin Coding Bootcamp.<br />
Highly creative thinker, software developer, and problem-solver<br />
with a passion for growth, business, and innovation.<br />
Focused on vanilla JavaScript, ReactJS and NodeJS-based web applications.
      </p>
    </div>
  );
}