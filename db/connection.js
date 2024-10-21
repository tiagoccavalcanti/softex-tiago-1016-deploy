const { Pool } = require('pg')
require("dotenv").config()
const pool = new Pool({
    connectionString: process.env.externalURL_Conection,
    ssl :{
        rejectUnauthorized: false
    }
})

module.exports = {pool}