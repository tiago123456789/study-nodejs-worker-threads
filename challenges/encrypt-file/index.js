const path = require("path");
const { Worker } = require("worker_threads")

const fileToEncrypt = process.argv[2]
const worker = new Worker(
    path.resolve(__dirname, "encrypt.js"),
    {
        workerData: {
            file: fileToEncrypt
        }
    }
)

worker.on("message", (msg) => {
    if (msg?.type === "done") {
        console.log(`File encrypted to ${msg.output}`);
        console.log(`The key is ${msg.key} - don't lose it!`);
    }
})