const pool = require('../../db');
const queries = require('../students/queries');

const getStudents = (req, res) => {
    res.send("Get all  students.")
};

module.exports = {
    getStudents,
}