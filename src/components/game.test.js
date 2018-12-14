import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "./game";

configure({ adapter: new Adapter() });

describe("<Game />", () => {
  it("Renders without crashing", () => {
    shallow(<Game />);
  });
});
