import { app } from './app'
import './libs/database'
const port: number = 80

app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
