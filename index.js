import express from "express"
import { getAllCustomers, getCustomerById} from "./src/customers.js"


const app = express()

app.get('/customers', getAllCustomers)

app.get('/customers/:customerId', getCustomerById)

app.listen(3030, () => console.log("listening on http://localhost:3030..."))
