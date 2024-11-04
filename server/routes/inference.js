const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

// Route for inference
router.post('/', (req, res) => {
    const process = spawn('python3', ['./inference.py']); // Path to your inference script

    process.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
    });

    process.on('close', (code) => {
        res.json({ message: `Inference process exited with code ${code}` });
    });
});

module.exports = router;
