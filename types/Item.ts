import {Snake} from "./Snake";

export interface Item {
    points: number | typeof NaN
    isWormHole? : boolean
    x: number,
    y: number
    isSet?: any
}

export function Up(item: Item, items: Item[], snake: Snake) {
    snake.path += 'U'
    item.isSet = true
    return items.find( item => item.y - 1 , item.x )
}
export function Down(item: Item, items: Item[],snake: Snake) {
    snake.path += 'D'
    item.isSet = true
    return items.find( item => item.y + 1 , item.x )
}

export function Left(item: Item, items: Item[],snake: Snake) {
    snake.path += 'L'
    item.isSet = true

    return items.find( item => item.y , item.x - 1 )

}
export function Right(item: Item, items: Item[],snake: Snake) {
    snake.path += 'R'
    item.isSet = true

    return items.find( item => item.y , item.x + 1 )

}