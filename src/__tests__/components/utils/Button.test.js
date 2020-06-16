import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import Button from "../../../utils/Button";

test("Button should render with passed props", () => {
  const onClick = () => {
    // dummy for test
  };
  const wrapper = shallow(
    <Button type="submit" handleClick={onClick}>
      Test button
    </Button>
  );
  expect(toJSON(wrapper)).toMatchSnapshot();
});
