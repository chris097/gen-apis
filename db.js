const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     port: 5432
// });

const pool = new Pool({
    host: "ec2-34-207-12-160.compute-1.amazonaws.com",
    database: "d9sv05ul1upqsu",
    user: "ihvhjziobymsfq",
    port: 5432,
    password: "6c25cbf64f085703402fb08fed5dd207002b0bb1bf05f144bf05cb2564f933af",
});

module.exports = pool;