const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     port: 5432
// });

const pool = new Pool({
    Host: "ec2-34-197-84-74.compute-1.amazonaws.com",
    Database: "d1q5iraufp5cng",
    User: "ozswejfgkcggsn",
    Port: 5432,
    Password: "0dcf220a6c575bd9b0fa4e48b63846a712618300dc826ff62cbd979dae7c704d",
});

module.exports = pool;