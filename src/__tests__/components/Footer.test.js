import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Footer from "../../components/Footer";

test("Should render the Footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
