import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import ContactPage from "../../components/pages/ContactPage";

test("Should render Contage Page correctly", () => {
  const wrapper = shallow(<ContactPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
