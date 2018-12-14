import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { GuessList } from "./guess-list";

configure({ adapter: new Adapter() });

describe("<GuessList />", () => {
  const guesses = [100, 44, 55, 33, 21, 25];
  it("Renders without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("Renders list of guesses", () => {
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find("li");
    expect(items.length).toEqual(guesses.length);
    guesses.forEach((guess, index) => {
      expect(items.at(index).text()).toEqual(guess.toString());
    });
  });
});
