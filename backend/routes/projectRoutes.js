 const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { addProject, getProjects } = require('../controllers/projectController');

router.post('/', upload.single('image'), addProject);
router.get('/', getProjects);

module.exports = router;

