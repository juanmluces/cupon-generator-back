import { Generador } from "./generator";
import defaultConfig = require('./config.json');
const express = require('express')
const app = express()
const port = 3000
const generador = new Generador()
const bp = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//para peticiones directas al server
app.get('/', async (req, res) => {
  const config = defaultConfig;
  try {
    await res.json(generador.sortAlgoritm(config))
  } catch (error) {
    res.json({ error: error.message })
  }

})

//para peticiones desde el formulario del front
app.post('/', async (req, res) => {
  const config = req.body
  try {
    await res.json(generador.sortAlgoritm(config))
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

