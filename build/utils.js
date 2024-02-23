"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// Función para analizar y validar el comentario
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment'); // Si el comentario no es una cadena, lanza un error
    }
    return commentFromRequest; // Devuelve el comentario analizado
};
// Función para analizar y validar la fecha
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date'); // Si la fecha no es una cadena o no es una fecha válida, lanza un error
    }
    return dateFromRequest; // Devuelve la fecha analizada
};
// Función para analizar y validar el clima
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather'); // Si el clima no es una cadena o no es un valor válido, lanza un error
    }
    return weatherFromRequest; // Devuelve el clima analizado
};
// Función para analizar y validar la visibilidad
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility'); // Si la visibilidad no es una cadena, lanza un error
    }
    return visibilityFromRequest; // Devuelve la visibilidad analizada
};
// Función para verificar si un valor es una cadena
const isString = (string) => {
    return typeof string === "string";
};
// Función para verificar si un valor es una fecha válida
const isDate = (date) => {
    return Boolean(Date.parse(date)); // Intenta analizar la fecha, si tiene éxito, es una fecha válida
};
// Función para verificar si un valor es un clima válido
const isWeather = (param) => {
    return Object.values(types_1.Weather).includes(param); // Comprueba si el valor está incluido en los valores de Weather
};
// Función para verificar si un valor es una visibilidad válida
const isVisibility = (param) => {
    return Object.values(types_1.Visibility).includes(param); // Comprueba si el valor está incluido en los valores de Visibility
};
// Función para crear una nueva entrada de diario a partir de un objeto
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment), // Parsea y valida el comentario
        date: parseDate(object.date), // Parsea y valida la fecha
        weather: parseWeather(object.weather), // Parsea y valida el clima
        visibility: parseVisibility(object.visibility) // Parsea y valida la visibilidad
    };
    return newEntry; // Devuelve la nueva entrada de diario
};
exports.default = toNewDiaryEntry; // Exporta la función para crear nuevas entradas de diario
