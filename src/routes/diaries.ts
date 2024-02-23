import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

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
        const newDiaryEntry = toNewDiaryEntry(req.body);

        // Agrega la nueva entrada de diario
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
        
        // Envía la nueva entrada de diario como respuesta
        res.json(addedDiaryEntry);
    } catch (e) {
        if (e instanceof Error) {
            // Si ocurre un error durante el proceso, envía un estado 400 con el mensaje de error
            res.status(400).send(e.message);
        }
    }
});

export default router;
