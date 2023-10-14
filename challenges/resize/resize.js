const { parentPort, workerData } = require("worker_threads")
const sharp = require('sharp')

const { src, width, height } = workerData
const [filename, ext] = src.split(".")

const resize = async () => {
    await sharp(src)
            .resize(width, height, { fit: 'cover' })
            .toFile(`${src}-${width}.${ext}`)
}

resize()