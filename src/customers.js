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
export async function addNewCustomer(req, res) { 
    const {first_name, last_name, email, phone} = req.body
    const pool = new Pool(creds)
    const query = `INSERT INTO customers (first_name, last_name, phone, email)
    VALUES ('${first_name}', '${last_name}', '${phone}', '${email}')`
    console.log(query)
    await pool.query(query)
        .catch(err => res.status(500).send(err))
    res.status(201).send({ message: 'Customer succeccfully created'})
    pool.end()
}