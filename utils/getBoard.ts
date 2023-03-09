import {readFile} from "./readFile";
import {Item} from "../types/Item";

export function getBoard(text: string[] = readFile()): Item[] {

    const items: Item[] = []
    const [_, __, ...board] = text

    for (let y = 0; y < board.length; y++) {
        const row = board[y]

        for (let x = 0; x < row.length - 1; x++) {
            const points = +board[y][x]
            const item: Item = {x: +x,y: +y, points}

            // @ts-ignore
            if (points === NaN) {
                item.isWormHole = true
            }

            items.push(item)
        }

    }

    return items
}