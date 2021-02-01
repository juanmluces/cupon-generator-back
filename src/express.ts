import { Generador } from "./app";
import config = require('./config.json');
const express = require('express')
const app = express()
const port = 3000
const generador = new Generador()


app.get('/', (req, res) => {
  const algoritmo = config.algoritmo;
  let maxNumber = ''
  for (let i = 0; i < config.longitud; i++) {
    maxNumber += '9'
  }
  if (config.cantidad > JSON.parse(maxNumber)) {
    res.json({ error: 'error, debes indicar una cantidad menor respecto a la longitud de los cupones' })
  } else {
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

  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

