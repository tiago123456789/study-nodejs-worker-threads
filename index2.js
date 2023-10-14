const path = require("path");
const { Piscina,  } = require("piscina")
const { cpus } = require("os")

const piscina = new Piscina({
    maxQueue: 'auto',
    minThreads: cpus.length,
    filename: path.resolve(__dirname, "./loop.js")
});


piscina.run({
    total: 1000000
})
piscina.run({
    total: 1000000
})


console.time("teste")
piscina.on("completed", () => {
    console.timeEnd("teste")
})
