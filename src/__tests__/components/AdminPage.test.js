import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { AdminPage } from "../../components/pages/AdminPage";

test("Should render Admin Page correctly", () => {
  const wrapper = shallow(<AdminPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
