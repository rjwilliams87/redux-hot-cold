import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AuralStatus } from "./aural-status";

configure({ adapter: new Adapter() });

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus />);
  });

  it("Renders correct status", () => {
    let testStatus = "This is a test";
    const wrapper = shallow(<AuralStatus auralStatus={testStatus} />);
    expect(wrapper.contains(testStatus)).toEqual(true);
  });
});
