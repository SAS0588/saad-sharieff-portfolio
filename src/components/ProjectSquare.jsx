import React from "react";

const ProjectSquare = ({ projectObject }) => (
    <div className="card">
      <img
        className="card-img-top"
        src={projectObject.projectImage}
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">{projectObject.projectName}</h4>
        <p className="card-text">{projectObject.projectDesc}</p>
        <a target="_blank" href={projectObject.projectUrl} className="btn btn-primary">
          Visit project
        </a>
      </div>
    </div>
);

export default ProjectSquare;
