import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InfoSection from "./info-section";

configure({ adapter: new Adapter() });

describe("<InfoSection />", () => {
  it("Renders without crasing", () => {
    shallow(<InfoSection />);
  });
});
