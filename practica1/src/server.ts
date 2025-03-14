import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/database';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("OK");
})

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})