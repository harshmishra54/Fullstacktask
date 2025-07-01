 const Contact = require('../models/Contact');

exports.addContact = async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;
        const contact = new Contact({ fullName, email, mobile, city });
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

