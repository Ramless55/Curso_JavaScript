//modelo de la base de datos

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gamesModel = new Schema(
    {
        name: { type: String, required: true, minLength: 3, maxLength: 30 },
        developer: { type: String, required: true, minLength: 3, maxLength: 30 },
        gender: { type: String, required: true, minLength: 3, maxLength: 20 },
        gameModes: { type: String, required: true, minLength: 3, maxLength: 20 },
        category: { type: String, required: true, minLength: 3, maxLength: 20 },
        platforms: { type: String, required: true, minLength: 3, maxLength: 30 },
        //agregar date mas tarde.
        release: { type: String, required: true, minLength: 3, maxLength: 20 },
    }
)

module.exports = mongoose.model('Games', gamesModel);