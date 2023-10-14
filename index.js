const path = require("path")
const { Worker } = require("worker_threads")

const worker = new Worker(path.resolve(__dirname, "./loop.js"), {
    workerData: {
        total: 1000000
    }
})

worker.on("exit", () => {
    console.log("Finished loop much heavy")
})


console.log("Passed on here")

setInterval(() => {}, 10000)