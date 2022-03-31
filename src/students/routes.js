const { Router } = require('express');
const controller = require('../students/controller');

const router = Router();

router.get("/", controller.getStudents);

module.exports = router;