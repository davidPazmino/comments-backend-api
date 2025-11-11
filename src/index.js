const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;
const BACKEND_DATA_URL = (process.env.BACKEND_DATA_URL || 'http://localhost:8081').replace(/\/$/, '');

app.get('/api/comments', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_DATA_URL}/data/comments`, { timeout: 5000 });
    res.json(response.data);
  } catch (error) {
    console.error('Error consultando backend-data:', error.message);
    res.status(502).json({
      error: 'No se pudo contactar con backend-data',
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API escuchando en puerto ${PORT}`);
});
