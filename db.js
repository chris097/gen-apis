const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "students",
//     port: 5432
// });

const pool = new Pool({
    Host: "ec2-54-160-109-68.compute-1.amazonaws.com",
    Database: "d80rmkghjc03hu",
    User: "ibpkfwyhvsnaut",
    Port: 5432,
    Password: "786e5d68d569132e6a1a057ae369bd38d20d8fd69e8d2f6602e14c57058f528e",
});

module.exports = pool;