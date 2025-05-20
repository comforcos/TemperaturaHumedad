const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const API_KEY = 'd504d53b4583c1ccaaaaa6a2b69ce649d7e897d374b4acb2445c87a34997c051';

app.get('/datos-ree', async (req, res) => {
  try {
    const response = await axios.get('https://api.esios.ree.es/indicators/1001', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'x-api-key': API_KEY
      }
    });
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(PORT, () => console.log(`Servidor proxy en http://localhost:${PORT}`));