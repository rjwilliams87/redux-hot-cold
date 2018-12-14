import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import { RESTART_GAME, GENERATE_AURAL_UPDATE } from "../actions";
import { TopNav } from "./top-nav";
Enzyme.configure({ adapter: new Adapter() });

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("dispatches restartGame when new game is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".new");
    link.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });

  it("dispatches generateAuralUpdate when link is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".status-link");
    link.simulate("click");
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});
