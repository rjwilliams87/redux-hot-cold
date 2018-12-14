import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Feedback } from "./feedback";

configure({ adapter: new Adapter() });

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("Renders correct feedback", () => {
    let testFeedback = "Guess again!";
    const wrapper = shallow(<Feedback feedback={testFeedback} />);
    expect(wrapper.contains(testFeedback)).toEqual(true);
  });
});
