import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MobileNav from "../../components/Footer";

test("Should render the Footer correctly", () => {
  const wrapper = shallow(<MobileNav />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
