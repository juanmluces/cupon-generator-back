"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generador = void 0;
const random = require('random');
class Generador {
    generateSecuencialNumber(config) {
        const result = [];
        //creamos un cupón por la cantidad de veces indicada
        for (let cupon = 1; cupon <= config.cantidad; cupon++) {
            //lo convertimos a string para añadirle la cantidad de '0's a la izquierda nevesarios
            let cuponNumber = JSON.stringify(cupon);
            const numberZeros = (config.longitud - cuponNumber.length);
            for (let zero = 0; zero < numberZeros; zero++) {
                cuponNumber = '0' + cuponNumber;
            }
            result.push(cuponNumber);
        }
        return result;
    }
    //recive como parametro un callback de las funciones que generan numeros para añadirle el valor alfabético aleatoreo
    generateAlfaNumber(generateNumber) {
        const numbers = generateNumber;
        const alfaNumbers = [];
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        numbers.forEach(number => {
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
            number = `${randomCharacter}-${number}`;
            alfaNumbers.push(number);
        });
        return alfaNumbers;
    }
    //para crear los numeros aleatoreos de una longitud específica creamos los numeros 10000 (cant de 0 igual que la longitud) y 90000 para establecer los parametos de los numeros aleatorios
    generateRandomNumber(config) {
        const result = [];
        for (let cupon = 1; cupon <= config.cantidad; cupon++) {
            let lengthOfNumberString = '1';
            for (let zero = 1; zero < config.longitud; zero++) {
                lengthOfNumberString += '0';
            }
            let minLengthOfNumber = parseInt(lengthOfNumberString);
            let maxLengthOfNumber = parseInt(lengthOfNumberString.replace('1', '9'));
            let cuponNumber = random.int(minLengthOfNumber, maxLengthOfNumber);
            result.push(JSON.stringify(cuponNumber));
        }
        return result;
    }
    sortAlgoritm(pConfig) {
        const algoritmo = pConfig.algoritmo;
        let result;
        switch (algoritmo) {
            case 'num secuencial':
                result = this.generateSecuencialNumber(pConfig);
                break;
            case 'num random':
                result = this.generateRandomNumber(pConfig);
                break;
            case 'alfa secuencial':
                result = this.generateAlfaNumber(this.generateSecuencialNumber(pConfig));
                break;
            case 'alfa random':
                result = this.generateAlfaNumber(this.generateRandomNumber(pConfig));
                break;
            default:
                result = { error: 'ha habido un error con la cofiguracion del algoritmo' };
        }
        return result;
    }
}
exports.Generador = Generador;
