import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

configure({ adapter: new Adapter() });

import StatusSection from "./status-section";

describe("<StatusSection />", () => {
  it("Renders without crashing", () => {
    shallow(<StatusSection />);
  });
});
