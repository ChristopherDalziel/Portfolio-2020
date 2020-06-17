import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { ProjectList } from "../../components/ProjectList";
import projects from "../fixtures/projects";

test("Should render list with projects", () => {
  const wrapper = shallow(<ProjectList projects={projects} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render project list with empty message", () => {
  const wrapper = shallow(<ProjectList projects={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
