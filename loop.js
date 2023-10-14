const { workerData, parentPort } = require('worker_threads')

async function loop(total) {
    for (let index = 0; index < total; index += 1) {
        console.log(index)
    }
    console.log("#####################################")
    console.log("#####################################")
    console.log("#####################################")

}

module.exports = ({ total }) => loop(total)

