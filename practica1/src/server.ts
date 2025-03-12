import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/database';

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send("OK");
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})