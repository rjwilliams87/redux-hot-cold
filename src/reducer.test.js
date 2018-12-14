import { reducer } from "./reducer";
import * as actions from "./actions";

describe("reducer", () => {
  const initialState = {
    correctAnswer: 99,
    guesses: [],
    feedback: "Make your guess!",
    auralStatus: ""
  };
  const seededState = {
    correctAnswer: 1,
    guesses: [1, 33, 44, 55, 66, 99],
    feedback: "You got it!",
    auralStatus: `You've made 10 guesses`
  };
  it("should set the initial state when nothing is passed in", () => {
    const state = reducer(undefined, { type: "_UNKOWN" });
    expect(state.guesses).toEqual(initialState.guesses);
    expect(state.feedback).toEqual(initialState.feedback);
    expect(state.auralStatus).toEqual(initialState.auralStatus);
  });

  it("should return the current state on an unkown action", () => {
    let currentState = {};
    const state = reducer(currentState, { type: "_UNKOWN" });
    expect(state).toBe(currentState);
  });

  describe("restartGame", () => {
    it("should reset state", () => {
      let state = seededState;
      state = reducer(state, actions.restartGame(99));
      expect(state).toEqual(initialState);
    });
  });

  describe("makeGuess", () => {
    it("should add guess to state.guesses array", () => {
      let state = initialState;
      state = reducer(state, actions.makeGuess(22));
      state = reducer(state, actions.makeGuess(55));
      state = reducer(state, actions.makeGuess(1));
      expect(state.guesses).toEqual([22, 55, 1]);
    });

    it("should update stte with correct feedback", () => {
      let state = initialState;
      state = reducer(state, actions.makeGuess(1));
      expect(state.feedback).toEqual("You're Ice Cold...");
      state = reducer(state, actions.makeGuess(68));
      expect(state.feedback).toEqual("You're Cold...");
      state = reducer(state, actions.makeGuess(88));
      expect(state.feedback).toEqual("You're Warm.");
      state = reducer(state, actions.makeGuess(98));
      expect(state.feedback).toEqual("You're Hot!");
      state = reducer(state, actions.makeGuess(99));
      expect(state.feedback).toEqual("You got it!");
    });
  });

  describe("generateAuralUpdate", () => {
    it("should update state.auralStatus", () => {
      let state = initialState;
      state = reducer(state, actions.generateAuralUpdate());
      expect(state.auralStatus).toEqual(
        `Here's the status of the game right now: ${
          initialState.feedback
        } You've made ${initialState.guesses.length} guesses.`
      );
    //   state = reducer(state, actions.makeGuess(1));
    //   state = reducer(state, actions.generateAuralUpdate());
    //   expect(state.auralStatus).toEqual(`
    //     Here's the status of the game right now:
    //       ${state.feedback} You've made ${
    //     state.guesses.length
    //   } guess. It was: ${state.guesses[0]}
    //   `);
    });
  });
});
