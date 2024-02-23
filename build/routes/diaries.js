"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
// Ruta para obtener todas las entradas de diario
router.get('/', (_req, res) => {
    // Envía todas las entradas de diario sin información sensible
    res.send(diaryServices.getEntriesWithoutSensetiveInfo());
});
// Ruta para obtener una entrada de diario por su ID
router.get('/:id', (req, res) => {
    // Busca la entrada de diario por su ID
    const diary = diaryServices.findById(Number(req.params.id));
    // Si se encuentra la entrada, la envía como respuesta, de lo contrario, devuelve un estado 404
    return (diary != null)
        ? res.send(diary)
        : res.sendStatus(404);
});
// Ruta para agregar una nueva entrada de diario
router.post('/', (req, res) => {
    try {
        // Intenta crear una nueva entrada de diario a partir de los datos recibidos en la solicitud
        const newDiaryEntry = (0, utils_1.default)(req.body);
        // Agrega la nueva entrada de diario
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        // Envía la nueva entrada de diario como respuesta
        res.json(addedDiaryEntry);
    }
    catch (e) {
        if (e instanceof Error) {
            // Si ocurre un error durante el proceso, envía un estado 400 con el mensaje de error
            res.status(400).send(e.message);
        }
    }
});
exports.default = router;
