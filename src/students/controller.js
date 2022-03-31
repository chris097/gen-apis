const pool = require('../../db');
const queries = require('../students/queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.send(results.rows)
    })
};

module.exports = {
    getStudents,
}