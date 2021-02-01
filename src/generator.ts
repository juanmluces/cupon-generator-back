const random = require('random')


export class Generador {

  generateSecuencialNumber(config): string[] {
    const result: string[] = [];

    //creamos un cupón por la cantidad de veces indicada
    for (let cupon = 1; cupon <= config.cantidad; cupon++) {
      //lo convertimos a string para añadirle la cantidad de '0's a la izquierda nevesarios
      let cuponNumber: string = JSON.stringify(cupon);
      const numberZeros: number = (config.longitud - cuponNumber.length)
      for (let zero = 0; zero < numberZeros; zero++) {
        cuponNumber = '0' + cuponNumber;
      }
      result.push(cuponNumber)
    }
    return result
  }

  //recive como parametro un callback de las funciones que generan numeros para añadirle el valor alfabético aleatoreo
  generateAlfaNumber(generateNumber: string[]): string[] {
    const numbers: string[] = generateNumber;
    const alfaNumbers: string[] = []
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    numbers.forEach(number => {
      const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      number = `${randomCharacter}-${number}`;
      alfaNumbers.push(number)
    });

    return alfaNumbers
  }


  //para crear los numeros aleatoreos de una longitud específica creamos los numeros 10000 (cant de 0 igual que la longitud) y 90000 para establecer los parametos de los numeros aleatorios
  generateRandomNumber(config): string[] {
    const result: string[] = [];
    for (let cupon = 1; cupon <= config.cantidad; cupon++) {
      let lengthOfNumberString: string = '1';
      for (let zero = 1; zero < config.longitud; zero++) {
        lengthOfNumberString += '0'
      }
      let minLengthOfNumber: number = parseInt(lengthOfNumberString)
      let maxLengthOfNumber: number = parseInt(lengthOfNumberString.replace('1', '9'))
      let cuponNumber: number = random.int(minLengthOfNumber, maxLengthOfNumber);
      result.push(JSON.stringify(cuponNumber))
    }
    return result
  }

}

