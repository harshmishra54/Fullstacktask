 const Project = require('../models/Project');

exports.addProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const image = req.file.filename;
        const project = new Project({ name, description, image });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

