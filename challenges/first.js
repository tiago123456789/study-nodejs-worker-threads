const {
    isMainThread,
    Worker,
    workerData,
    parentPort
 } = require("worker_threads")

 if (isMainThread) {
    const worker = new Worker(__filename, {
        workerData: "hello"
    })

    worker.on("message", (message) => {
        console.log(`Worker message`, message)
    })
    worker.on('error', (err) => {
        console.error(err)
    })
    worker.on('exit', code => console.log(`Worker exited with code ${code}`))
 } else {
    const data = workerData;
    parentPort.postMessage(`You said ${data}`)
 }