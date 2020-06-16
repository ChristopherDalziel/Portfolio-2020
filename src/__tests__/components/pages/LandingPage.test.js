import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import LandingPage from "../../../components/pages/LandingPage";

test("Should render Landing Page correctly", () => {
  const wrapper = shallow(<LandingPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
