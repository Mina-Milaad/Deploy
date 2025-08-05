import express from 'express'
import { dbConn } from './database/dbConnection.js'
import { bootstrap } from './src/module/bootstrap.js'
const app = express()

const port = 5000
app.use(express.json())

bootstrap(app)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))