const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importing each route from the correct path
const dataCollectionRoutes = require('./routes/dataCollection');
const trainingRoutes = require('./routes/training');
const inferenceRoutes = require('./routes/inference');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Route endpoints
app.use('/api/data', dataCollectionRoutes);
app.use('/api/train', trainingRoutes);
app.use('/api/infer', inferenceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
