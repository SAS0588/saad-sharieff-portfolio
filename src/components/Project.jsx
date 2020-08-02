import React, { useState } from "react";
import ProjectSquare from "../components/ProjectSquare";

function Project() {
  const [projectObjectArray, setProjectObjectArray] = useState([
    {
      projectName: "Tribute Page",
      projectImage: "https://i.imgur.com/YEFr28E.png",
      projectDesc:
        "A tribute page for my favorite sports icon: Muhammad Ali.\nBuilt with HTML and CSS, with emphasis on responsive design.",
      projectUrl: "https://codepen.io/saadsharieff/pen/RwPYoNo",
    },
    {
      projectName: "Survey Page",
      projectImage: "https://i.imgur.com/Q5G6Zcm.png",
      projectDesc:
        "A simple survey page that shows off HTML 5 forms and responsive design.",
      projectUrl: "https://codepen.io/saadsharieff/pen/KKpxNwB",
    },
    {
      projectName: "Product Landing Page",
      projectImage: "https://i.imgur.com/rVfgUw0.png",
      projectDesc:
        "A product landing page for a luchador renting company.\nBuilt with CSS flexbox for mobile responsiveness.",
      projectUrl: "https://codepen.io/saadsharieff/pen/JjdeQVN",
    },
    {
      projectName: "Technical Page",
      projectImage: "https://i.imgur.com/7tsC8bK.png",
      projectDesc:
        "A technical page to learn about JavaScript. Built with CSS grid for responsiveness.",
      projectUrl: "https://codepen.io/saadsharieff/pen/KKpxNKB",
    },
    {
      projectName: "Portfolio Version 1",
      projectImage: "https://i.imgur.com/XO8q8Yn.png",
      projectDesc:
        "A portfolio page I created for the Free Code Camp project.\nI built it with flexbox and RWD principles.",
      projectUrl: "https://codepen.io/saadsharieff/full/jObxVBL",
    },
  ]);

  return (
    <div>
      <div className="container">
        <div className="row sections">
          <div className="col-sm-12 display-4">
            <p id="about" className="custom-hdr">
              Projects
            </p>
          </div>
          {projectObjectArray.map((e) => {
            console.log(e);
            return <ProjectSquare projectObject={e} />;
          })}
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Project;
