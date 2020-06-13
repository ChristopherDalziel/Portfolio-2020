import React from "react";

const Project = ({ name, description, technology, url }) => (
  <>
    <p>{name}</p>
    <p>{description}</p>
    <p>{technology}</p>
    <img src={url} alt="related to project name" />
  </>
);

export default Project;