import {getDimensions} from "./getDimensions";

test('adds 1 + 2 to equal 3', () => {
    expect(getDimensions(["1 2 3"])).toEqual({cols: 1, rows: 2, snakes: 3});
});