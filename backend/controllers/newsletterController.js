 const Newsletter = require('../models/Newsletter');

exports.addSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        const subscriber = new Newsletter({ email });
        await subscriber.save();
        res.status(201).json(subscriber);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Newsletter.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

