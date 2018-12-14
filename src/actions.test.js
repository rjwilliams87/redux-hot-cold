import * as actions from "./actions";

describe("generateAuralUpdate", () => {
  it("should return the action", () => {
    const action = actions.generateAuralUpdate();
    expect(action.type).toEqual(actions.GENERATE_AURAL_UPDATE);
  });
});

describe("restartGame", () => {
  it("should return the action", () => {
    const correctAnswer = Math.floor(Math.random * 100) + 1;
    const action = actions.restartGame(correctAnswer);
    expect(action.type).toEqual(actions.RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe("makeGuess", () => {
  it("should return the action", () => {
    const guess = Math.floor(Math.random * 100) + 1;
    const action = actions.makeGuess(guess);
    expect(action.type).toEqual(actions.MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
