import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import projects from "../fixtures/projects";
import ProjectForm from "../../components/ProjectForm";

test("Should render Project Form correctly", () => {
  const wrapper = shallow(<ProjectForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should render Project Form with project data", () => {
  const wrapper = shallow(<ProjectForm project={projects[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// Need to add a display for error to show within component
test("Should render error for a invalid form submission", () => {
  const wrapper = shallow(<ProjectForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should set name on input change", () => {
  const value = "test name";
  const wrapper = shallow(<ProjectForm />);
  wrapper.find("#projectName").simulate("change", { target: { value } });
  expect(wrapper.state("name")).toBe(value);
});

test("Should set description on input change", () => {
  const value = "test description";
  const wrapper = shallow(<ProjectForm />);
  wrapper.find("#projectDescription").simulate("change", { target: { value } });
  expect(wrapper.state("description")).toBe(value);
});

test("Should set technology on input change", () => {
  const value = "test technology";
  const wrapper = shallow(<ProjectForm />);
  wrapper.find("#technologyUsed").simulate("change", { target: { value } });
  expect(wrapper.state("technology")).toBe(value);
});

test("Should set githubUrl on input change", () => {
  const value = "test githuburl.com";
  const wrapper = shallow(<ProjectForm />);
  wrapper.find("#githubUrl").simulate("change", { target: { value } });
  expect(wrapper.state("githubUrl")).toBe(value);
});
