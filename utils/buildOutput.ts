import {Snake} from "../types/Snake";
import fs from "fs";

export function buildOutput(snakes: Snake[]) {


    let text = ''

    snakes.forEach( item => {
        let row = ''
        for (let i = 0; i < item.path.length - 1; i++) {
            row += ' ' + item.path[i]
        }
        row += '\n'
        text += row
    })


    fs.writeFileSync(__dirname + "/../result/result.txt", text, 'ascii');
}