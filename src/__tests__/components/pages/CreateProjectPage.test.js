import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { CreateProjectPage } from "../../../components/pages/CreateProjectPage";
import projects from "../../fixtures/projects";

let startCreateProject, history, wrapper;

beforeEach(() => {
  startCreateProject = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <CreateProjectPage
      startCreateProject={startCreateProject}
      history={history}
    />
  );
});

test("Should render Create Project Page correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ProjectForm").prop("onSubmit")(projects[1]);
  expect(history.push).toHaveBeenLastCalledWith("/portfolio");
  expect(startCreateProject).toHaveBeenLastCalledWith(projects[1]);
});
