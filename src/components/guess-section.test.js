import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GuessSection from "./guess-section";

configure({ adapter: new Adapter() });

describe("<GuessSection />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessSection />);
  });
});
