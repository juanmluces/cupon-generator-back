import { Generador } from "./generator";
import config = require('./config.json');

const generador = new Generador()

if (config.longitud > 9) config.longitud = 9

switch (config.algoritmo) {
  case 'num secuencial':
    console.log(generador.generateSecuencialNumber(config));
    break;
  case 'num random':
    console.log(generador.generateRandomNumber(config));
    break;
  case 'alfa secuencial':
    console.log(generador.generateAlfaNumber(generador.generateSecuencialNumber(config)));
    break;
  case 'alfa random':
    console.log(generador.generateAlfaNumber(generador.generateRandomNumber(config)));
    break;
  default:
    console.log({ error: 'ha habido un error con la cofiguracion del algoritmo' })
}