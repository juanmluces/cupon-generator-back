import { Generador } from "./generator";
const express = require('express')
const app = express()
const port = 3000
const generador = new Generador()
const bp = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  const config = req.body

  const algoritmo = config.algoritmo;
  if (config.longitud > 9) config.longitud = 9
  let maxNumber = ''
  for (let i = 0; i < config.longitud; i++) {
    maxNumber += '9'
  }

  switch (algoritmo) {
    case 'num secuencial':
      res.json(generador.generateSecuencialNumber(config));
      break;
    case 'num random':
      res.json(generador.generateRandomNumber(config));
      break;
    case 'alfa secuencial':
      res.json(generador.generateAlfaNumber(generador.generateSecuencialNumber(config)));
      break;
    case 'alfa random':
      res.json(generador.generateAlfaNumber(generador.generateRandomNumber(config)));
      break;
    default:
      res.json({ error: 'ha habido un error con la cofiguracion del algoritmo' })
  }

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
