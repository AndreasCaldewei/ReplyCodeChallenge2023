import {getBoard} from "./getBoard";

test('adds 1 + 2 to equal 3', () => {
    expect(getBoard()).toEqual({cols: 1, rows: 2, snakes: 3});
});