import express from "express"
import pg from 'pg'//connect dbç
import { creds } from './creds.js'//db

const { Pool} = pg //db
const app = express()

app.get('/customers', async (req, res) => {
    const pool = new Pool(creds)//db
    const customers = await pool.query("SELECT * FROM customers")
    .catch(err => res.status(500).send(err))
    res.send(customers.rows)
    pool.end()
})


app.listen(3030, () => console.log("listening on http://localhost:3030..."))
