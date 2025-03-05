import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index';

const port = process.env.PORT || 5000

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('It works');
})

app.use(routes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})