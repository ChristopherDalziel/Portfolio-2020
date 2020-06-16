import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import PortfolioPage from "../../../components/pages/PortfolioPage";

test("Should render the Portfolio Page correctly", () => {
  const wrapper = shallow(<PortfolioPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
