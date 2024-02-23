import express from 'express' //ESmodules
//const express = requiere ('express') -> commonjs (utilizamos ESmodules pero se compilan como commonjs)
import diaryRouter from './routes/diaries'

const app = express() //inicializo la app con express
app.use(express.json()) //middleware que transforma la req.body en un json

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here !')
    res.send('pong')
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});