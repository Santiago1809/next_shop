import { connect } from 'mongoose'

async function connection() {
  try {
    await connect('mongodb://santiago:root@localhost/nextshop?authSource=admin')
    console.log('DB connected to database')
  } catch (err) {
    console.log(err)
  }
}
connection()
