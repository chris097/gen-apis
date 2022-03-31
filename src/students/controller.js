const pool = require('../../db');
const queries = require('../students/queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        res.send(results.rows)
    })
};

module.exports = {
    getStudents,
}