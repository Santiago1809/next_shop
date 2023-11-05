import { connect } from 'mongoose'

async function connection (): Promise<void> {
  await connect('mongodb://santiago:root@localhost/nextshop?authSource=admin')
}
connection()
  .then(() => {
    console.log('DB is connected')
  })
  .catch((err) => {
    console.log(err)
  })
