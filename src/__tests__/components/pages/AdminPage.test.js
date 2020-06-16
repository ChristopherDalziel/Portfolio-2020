import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { AdminPage } from "../../../components/pages/AdminPage";

test("Should render Admin Page correctly", () => {
  const wrapper = shallow(<AdminPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

// Should be calling however is not working for unknown reasons
test("Should call startLogin on button click", () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<AdminPage handleClick={startLoginSpy} />);
  wrapper.find("Button").simulate("click");
  expect(startLoginSpy).toHaveBeenCalled();
});
