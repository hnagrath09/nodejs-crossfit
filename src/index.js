const express = require('express')
const bodyParser = require('body-parser')
const v1WorkoutRouter = require('./v1/routes/workoutRoutes')
const { swaggerDocs: v1SwaggerDocs } = require('./v1/swagger')

const app = express()
const PORT = process.env.PORT ?? 8080

console.log('Database URL', process.env.DATABASE_URL)

app.use(bodyParser.json())
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
  v1SwaggerDocs(app, PORT)
})
