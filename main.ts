import {readFile} from "./utils/readFile";
import {getDimensions} from "./utils/getDimensions";
import {getBoard} from "./utils/getBoard";
import {getSnakes} from "./utils/getSnakes";
import {Down, Left, Right, Up} from "./types/Item";
import {Snake} from "./types/Snake";
import {buildOutput} from "./utils/buildOutput";

export function main() {
    const fileText = readFile()
    const {rows, cols } = getDimensions(fileText)
    const snakes = getSnakes(fileText)
    const board = getBoard(fileText)
    const snakeList: Snake[] = []

    let c = 0

    for (let i = 0; i < snakes.length; i++) {
         c = c + 1;

        const snakeLength: number = snakes[i]
        const startX = Math.floor(Math.random() * (cols))
        const startY = Math.floor(Math.random() * (rows))

        const snake = new Snake(startX, startY)

        console.log('c', c)

        if (c === 1000) {
            console.log('c restart')

            i = i -1
            continue;
        }

        let complexity = 1
        let lastItem = board.find(item => item.x === startX, startY === startY);
        for (let j = 0; j < snakeLength ; j++) {
            complexity += 1
            console.log('complexity', complexity)

            const action = Math.floor(Math.random() * (4))

            if (complexity === 1000) {
                console.log('complexity restart')
                i = i -1
                break;
            }


            // ts-ignore
            if (lastItem === undefined) {
                j = j - 1
                continue;
            }

            // ts-ignore
            if (lastItem?.isSet === true) {
                j = j - 1
                continue;
            }

            // ts-ignore
            if (lastItem?.isWormHole === true) {
                j = j - 1
                continue;
            }

            if (action === 0) {
                // ts-ignore
                lastItem = Up(lastItem,board,snake)
                continue;
            }
            if (action === 1) {

                lastItem =  Down(lastItem,board, snake)
                continue;
            }
            if (action === 2) {

                lastItem =   Left(lastItem,board, snake)
                continue;
            }
            if (action === 3) {

                lastItem =   Right(lastItem,board, snake)


            }
        }
        snakeList.push(snake)
    }

    buildOutput(snakeList)
    return snakeList
}



