import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const port = process.env.PORT || 5000

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('It works');
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})