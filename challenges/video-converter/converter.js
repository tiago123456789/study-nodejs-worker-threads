const { parentPort, workerData } = require("worker_threads")
const ffmpeg = require("fluent-ffmpeg")
const { serialize } = require("v8")

const resizeVideo = (src, size) => {
    const [filename, ext] = src.split(".")
    const output = `${filename}-${size}.${ext}`
    ffmpeg(`${src}`)
        .size(size)
        .on("end", () => parentPort.postMessage({ output, input: src, type: "done" }))
        .save(output)
}

parentPort.on("message", (msg) => {
    const { file, size } = msg
    resizeVideo(file, size)
})