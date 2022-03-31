const pool = require('../../db');
const queries = require('../students/queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        if(results?.rows === []){
            res.send('empty')
        }else{
            res.status(200).json(results?.rows)
        }
    })
};

module.exports = {
    getStudents,
}