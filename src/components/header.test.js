import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./info-section";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("Renders without crashing", () => {
    shallow(<Header />);
  });
});
