import React from "react";

const Project = ({ name, description, technology, url }) => (
  <>
    <p>{name}</p>
    <p>{description}</p>
    <p>{technology}</p>
    <p>{url}</p>
  </>
);

export default Project;
