import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import AboutPage from "../../components/pages/AboutPage";

test("Should render the About Page correctly", () => {
  const wrapper = shallow(<AboutPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
