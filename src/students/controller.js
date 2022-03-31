const pool = require('../../db');
const queries = require('../students/queries');

// query to access all students
const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        res.status(200).json(results?.rows);
        // if(error) throw error;
    })
};

//query to access student by id
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        res.status(200).send(results?.rows);
        // if(error) throw error;
    })
}

// query to add a student
const addStudent = (req, res) => {
    const{ name, email, age, dob } = req.body;

    // check if email exists
    pool.query(queries.checkEmailExist, [email], (error, results) => {
        if(results?.rows?.length){
            res.send("Email already exist")   
        }
    });

    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
        res.status(201).send("Student successfully created.")
        // if(error) throw error;
    })

}

module.exports = {
    getStudents,
    addStudent,
    getStudentById,
}