const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

// Route for model training
router.post('/', (req, res) => {
    const process = spawn('python3', ['./data_training.py']);

    process.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
    });

    process.on('close', (code) => {
        res.json({ message: `Model training exited with code ${code}` });
    });
});

module.exports = router;
