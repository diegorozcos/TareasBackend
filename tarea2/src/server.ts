import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import rutas from './routes/index';

const app = express();
app.use(express.json());

app.use('/api', rutas);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
