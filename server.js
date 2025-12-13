const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// For JSON
app.use(bodyParser.json());

// For form-data or urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
