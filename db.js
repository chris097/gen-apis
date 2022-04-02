const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     port: 5432
// });

const pool = new Pool({
    host: "ec2-52-21-136-176.compute-1.amazonaws.com",
    database: "db96u8teebjqqd",
    user: "raqywdqdmfract",
    port: 5432,
    password: "96c913b1f6bd92ee18fcbb5a6f6ac89c10e716a2c01da88c02466d16453c6dcc",
});

module.exports = pool;