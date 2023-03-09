export function getDimensions(text: string[]) {
    const [cols, rows, snakes] = text[0].split(' ')
    return {cols: +cols, rows: +rows, snakes: +snakes}
}