const axios = require('axios');

const NEWS_API_KEY = process.env.API_KEY;
const NEWS_API_URL = process.env.API_URL;

getSources = async(req, res) => {
    try {
        const response = await axios.get(`${NEWS_API_URL}/sources`, {
            params: { apiKey: NEWS_API_KEY}
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo fuentes de noticias'});
    }
};

getTopHeadlines = async (req, res) => {
    try {
        const { country, category, sources, q } = req.query;
        if (!country && !category && !sources && !q) {
            return res.status(400).json({
                error: 'Debes proporcionar al menos un parámetro: country, category, sources o q'
            });
        }
        const response = await axios.get(`${NEWS_API_URL}/top-headlines`, {
            params: { apiKey: NEWS_API_KEY, country, category, sources, q }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo titulares principales' });
    }
};

getEverything = async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ error: 'Se requiere un parámetro de búsqueda (query).' });
        }
        const response = await axios.get(`${NEWS_API_URL}/everything`, {
            params: { apiKey: NEWS_API_KEY, q }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error obteniendo noticias' });
    }
};

module.exports = {
    getSources,
    getTopHeadlines,
    getEverything
}