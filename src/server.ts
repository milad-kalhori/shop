import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
