import express from 'express';
import path from 'path';

const port = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => {
    res.send('It works');
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})