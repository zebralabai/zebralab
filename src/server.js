require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const integrationRoutes = require('./routes/integration.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/integrations', integrationRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/zebralab')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));