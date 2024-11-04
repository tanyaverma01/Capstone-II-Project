const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.post('/', (req, res) => {
    const { name } = req.body;
    const process = spawn('python3', ['./data_collection.py', name]);

    process.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
    });

    process.on('close', (code) => {
        res.json({ message: `Data collection exited with code ${code}` });
    });
});

module.exports = router;
