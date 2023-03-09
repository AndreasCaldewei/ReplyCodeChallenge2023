import {getSnakes} from "./getSnakes";


test('adds 1 + 2 to equal 3', () => {
    expect(getSnakes(["1 2 3"])).toEqual([1,2,3]);
});