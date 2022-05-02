import React from "react";
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
          <a className="hyperlink" href="https://linkedin.com/in/marie-valdovinos" rel= "noopener noreferrer" target="_blank"><img alt="..." src={LinkedIn}></img></a>
          <a className="hyperlink" href="https://twitter.com/mevaldov20" rel= "noopener noreferrer" target="_blank"><img alt="..." src={Twitter}></img></a>
          <a className="hyperlink" href="https://github.com/mevaldovi" rel= "noopener noreferrer" target="_blank"><img alt="..." src={Github}></img></a>
          <a className="hyperlink" href="https://www.youtube.com/channel/UCyfKEIg34EHFuwYFFcDWAkQ" rel= "noopener noreferrer" target="_blank"><img alt="..." src={YouTube}></img></a>
      </div>
    </div>
  );
};
export default Footer;
