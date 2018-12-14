import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GuessForm } from "./guess-form";
import { MAKE_GUESS, makeGuess } from "../actions";

configure({ adapter: new Adapter() });

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("dispatches makeGuess on form submit", () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = "10";
    wrapper.find("input").instance().value = value;
    wrapper.simulate("submit");
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });

  it("Should reset the input when the form is submitted", () => {
    const wrapper = mount(<GuessForm dispatch={() => {}} />);
    const input = wrapper.find("input");
    input.instance().value = "10";
    wrapper.simulate("submit");
    expect(input.instance().value).toEqual("");
  });
});
