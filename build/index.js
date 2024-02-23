"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESmodules
//const express = requiere ('express') -> commonjs (utilizamos ESmodules pero se compilan como commonjs)
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)(); //inicializo la app con express
app.use(express_1.default.json()); //middleware que transforma la req.body en un json
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here !');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
