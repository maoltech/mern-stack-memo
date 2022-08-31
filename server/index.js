import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/post.js';
const app = express();


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
app.use('/post', postRoutes);


const CONNECTION_URL = 'mongodb://localhost';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

