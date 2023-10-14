const { StaticPool } = require("node-worker-threads-pool")
const path = require("path")

const pool = new StaticPool({
    size: 4,
    task: path.resolve(__dirname, "converter.js")
})

const videoToResize = process.argv[2]
const videoTargetSize = process.argv[3]

const resize = async () => {
    await pool.exec({ file: videoToResize, size: videoTargetSize })
    .then(msg => {
        if (msg?.type == "done") {
            console.log(`Saved ${videoToResize} to ${msg.output}`);
        }
    })
    
}

resize();