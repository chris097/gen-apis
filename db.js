const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     port: 5432
// });

const pool = new Pool({
    Host: "ec2-52-3-60-53.compute-1.amazonaws.com",
    Database: "dfokb2n758frv0",
    User: "zvngvoducmidpl",
    Port: 5432,
    Password: "7413c7e75421408c8b5d9ff865aaa7612662d06e0ddb8976bf3a7ad6564aef11",
});

module.exports = pool;