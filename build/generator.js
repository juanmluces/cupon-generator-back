"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generador = void 0;
const random = require('random');
class Generador {
    generateSecuencialNumber(config) {
        const result = [];
        for (let cupon = 1; cupon <= config.cantidad; cupon++) {
            let cuponNumber = JSON.stringify(cupon);
            const numberZeros = (config.longitud - cuponNumber.length);
            for (let zero = 0; zero < numberZeros; zero++) {
                cuponNumber = '0' + cuponNumber;
            }
            result.push(cuponNumber);
        }
        return result;
    }
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
}
exports.Generador = Generador;
