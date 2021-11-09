import React from "react";
import image1 from "../../images/ReactPortfolio.PNG";

export default function Portfolio() {
  const projects = [
    {
      title: "Crypto Corner",
      image: "https://cryptodecks.co/wp-content/uploads/2020/11/interesting-facts-about-cryptocurrency-1.jpg",
      gitHub: "https://github.com/mevaldovi/Crypto-Corner",
      liveSite: "https://mevaldovi.github.io/Crypto-Corner/",
    },
    {
      title: "Windows95",
      image: "https://guidebookgallery.org/pics/gui/startupshutdown/login/win95.png",
      gitHub: "https://github.com/mevaldovi/Windows-95-UI",
      liveSite: "https://windows-95-uta.herokuapp.com/login",
    },
    {
      title: "Password Generator",
      image: "https://i.pcmag.com/imagery/articles/06ISuYPg8y57RzpRaiTe4E2-2..1617290462.jpg",
      gitHub: "https://github.com/mevaldovi/Random-Password-Generator",
      liveSite: "https://mevaldovi.github.io/Random-Password-Generator/",
    },
    {
      title: "React Weather App",
      image: "https://i.pinimg.com/736x/d3/b4/51/d3b451b3d4ad80f1e31e6ca4c6d4adcf.jpg",
      gitHub: "https://github.com/mevaldovi/Clouds-React-Weather-App",
      liveSite: "https://mevaldovi.github.io/Clouds-React-Weather-App/",
    },
    {
      title: "README Generator",
      image: "https://miro.medium.com/max/3600/1*vb7X3RBEOCtLNTR82U-nLg.jpeg",
      gitHub: "https://github.com/mevaldovi/ReadMeGenerator_Revised",
      liveSite:
        "https://drive.google.com/file/d/1yuwqE0nUSRXwtrX48BLf_tEaDE3jma6k/view",
    },
    {
      title: "React Portfolio Generator",
      image: image1,
      gitHub: "https://github.com/mevaldovi/React_Portfolio_Generator",
      liveSite: "https://react-portfolio-generator-uta.herokuapp.com/",
    },
  ];

  return (
    <div className="div1">
      <h1 id="top">Portfolio</h1>
      <div className="row align-items-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project, i) => (
            <div className="card-body" key={i}>
              <h5 className="card-title">{project.title}</h5>
              <img
                alt="..."
                id="img-thumbnail"
                className="rounded-circle"
                src={project.image}
              />
              <a
                className="hyperlink"
                href={project.gitHub}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="github-link">Github Link</p>
              </a>
              <a
                className="hyperlink"
                href={project.liveSite}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="deployed-link">Live Site</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
