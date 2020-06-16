import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NotFoundPage from "../../../components/pages/NotFoundPage";

test("Should render NotFoundPage correctly", () => {
  wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
