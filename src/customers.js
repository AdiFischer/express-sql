import pg from 'pg'//connect dbç
import { creds } from '../creds.js'//db we added a . after coping 

const { Pool} = pg //db


export async function getAllCustomers(req, res) {// we copy and addded export function g..
    const pool = new Pool(creds)//db
    const customers = await pool.query("SELECT * FROM customers")
    .catch(err => res.status(500).send(err))
    res.send(customers.rows)
    pool.end()
}
export async function getCustomerById(req, res) {
    const {customerId} = req.params// we copy and addded export function g..
    const pool = new Pool(creds)//db
    const customers = await pool.query(`SELECT * FROM customers WHERE customer_id=${customerId}`)
    .catch(err => res.status(500).send(err))
    res.send(customers.rows)
    pool.end()
}