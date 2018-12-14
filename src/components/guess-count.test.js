import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GuessCount } from "./guess-count";

configure({ adapter: new Adapter() });

describe("<GuessCount />", () => {
  let guesses = [5, 10, 20];
  it("Renders without crashing", () => {
    shallow(<GuessCount />);
  });

  it("Renders the correct amount of guesses", () => {
    const wrapper = shallow(<GuessCount guessCount={guesses.length} />);
    expect(wrapper.text()).toEqual(`You've made ${guesses.length} guesses!`);
  });
});
