const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const ip = req.headers.host;
    const os = req.headers['user-agent'];
    const language = req.headers['accept-language'];
    
    res.render('index', {ip: ip, os: os, language: language});
});

module.exports = router;