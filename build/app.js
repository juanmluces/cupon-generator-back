"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generator_1 = require("./generator");
const defaultConfig = require("./config.json");
const express = require('express');
const app = express();
const port = 3000;
const generador = new generator_1.Generador();
const bp = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
//para peticiones directas al server
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const config = defaultConfig;
    try {
        yield res.json(generador.sortAlgoritm(config));
    }
    catch (error) {
        res.json({ error: error.message });
    }
}));
//para peticiones desde el formulario del front
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const config = req.body;
    try {
        yield res.json(generador.sortAlgoritm(config));
    }
    catch (error) {
        res.json({ error: error.message });
    }
}));
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
