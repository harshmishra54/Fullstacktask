 const express = require('express');
const router = express.Router();
const { addSubscriber, getSubscribers } = require('../controllers/newsletterController');

router.post('/', addSubscriber);
router.get('/', getSubscribers);

module.exports = router;

