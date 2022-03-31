const Pool = require('pg').Pool;

const pool = new Pool({
    user: "mxkmdvvewcdvln",
    host: "ec2-52-3-60-53.compute-1.amazonaws.com",
    database: "d11aas1v4qp1b1",
    password: "1f267c59ec5cf488d445fcac4687dee7efffbe7e6c9a20ca7a40f5519f06aa3a",
    port: 5432
});

module.exports = pool;