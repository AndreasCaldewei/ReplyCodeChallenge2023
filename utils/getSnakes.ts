export function getSnakes(text: string[]) : number[] {
    return text[1].split(' ').map( item => +item)
}