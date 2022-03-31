const pool = require('../../db');
const queries = require('../students/queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        res.status(200).json(results?.rows);
        if(error) throw error;
    })
};

module.exports = {
    getStudents,
}