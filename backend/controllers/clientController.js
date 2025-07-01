 const Client = require('../models/Client');

exports.addClient = async (req, res) => {
    try {
        const { name, description, designation } = req.body;
        const image = req.file.filename;
        const client = new Client({ name, description, designation, image });
        await client.save();
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

