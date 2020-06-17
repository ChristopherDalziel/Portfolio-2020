import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Nav from "../../components/Footer";

test("Should render the Footer correctly", () => {
  const wrapper = shallow(<Nav />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
