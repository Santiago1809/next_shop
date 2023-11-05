import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan("combined"))
const port:Number = 80

app.listen(port, () => {
  console.log("Server listening on port " + port)
})