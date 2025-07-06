const fs = require("fs")
const { Transform } = require("stream")

const sumTransform = new Transform({
    transform(chunk, encoding, callback) {
        const str = chunk.toString()
        const numbers = str.match(/\d+/g)

        let sumChank = 0
        for (num in numbers) {
            sumChank += parseInt(num)
        }
        this.push(sumChank + '/n')
        callback()
    }
})

const readStream = fs.createReadStream("input.txt")
const writeStream = fs.createWriteStream("out.txt")

readStream
    .pipe(sumTransform)
    .pipe(writeStream)