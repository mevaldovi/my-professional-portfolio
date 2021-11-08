import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Github from "../../images/2993771_github_social media_icon.png";
import LinkedIn from "../../images/107149_gray_circle_linkedin_icon.png";
import Twitter from "../../images/734367_media_online_social_twitter_icon.png";
import YouTube from "../../images/youtube.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <br></br>
      <br></br>
      <div>
          <a class="hyperlink" href="https://www.linkedin.com/in/marie-valdovinos-a616b21b1/" rel= "noopener noreferrer" target="_blank"><img src={LinkedIn}></img></a>
          <a class="hyperlink" href="https://twitter.com/mevaldov20" rel= "noopener noreferrer" target="_blank"><img src={Twitter}></img></a>
          <a class="hyperlink" href="https://github.com/mevaldovi" rel= "noopener noreferrer" target="_blank"><img src={Github}></img></a>
          <a class="hyperlink" href="https://www.youtube.com/channel/UCyfKEIg34EHFuwYFFcDWAkQ" rel= "noopener noreferrer" target="_blank"><img src={YouTube}></img></a>
      </div>
    </div>
  );
};
export default Footer;
