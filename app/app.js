const express = require("express")
const tasksRouter = require('./routes/tasks')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const startedAt = new Date

    res.on('finish', () => {
        console.log(`${startedAt.toISOString()} - ${req.method} ${req.originalUrl}`)
    })
    next()
})

app.get('/', (req, res) => {
    res.json({message: "Hello World"})
})

app.use('/api/tasks', tasksRouter)
app.use((req, res) => {
    res.status(404).json({
error: `Маршрут ${req.originalUrl} https://improved-disco-wr6rjx6w5vrpfv4vx-3000.app.github.dev/`
    })
})

module.exports = app