import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import Project from "../../components/Project";
import projects from "../fixtures/projects";

test("Should render individual project with data", () => {
  const wrapper = shallow(
    <Project
      name={projects[2].name}
      description={projects[2].description}
      technology={projects[2].technology}
      githubUrl={projects[2].githubUrl}
      url={projects[2].url}
    />
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
