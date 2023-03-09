import fs from 'fs'

export function readFile(fileName = "00-example.txt") :  string[] {
    const response = fs.readFileSync(__dirname + '/../' + fileName,   'ascii')
    return response.split('\r\n')
}